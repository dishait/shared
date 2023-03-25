import{a as Q,Y as V,ah as W,k as b,z as ee,a0 as te,o as q,b as L,x as ne,F as ae,e as f,i as U,f as F,w as J,J as z,t as ie,ay as S,ac as N,az as oe,M as se,a1 as re,a2 as ce,j as le,X as ue,ad as B,q as de,aA as E,aa as Z,aB as H,aC as pe,aD as ve,as as O}from"./entry.ab63fddb.js";import{r as j}from"./asyncData.3a12cda2.js";import{_ as fe}from"./entry.bd32314b.js";/* empty css                               */const R=i=>(re("data-v-0c109cae"),i=i(),ce(),i),we=R(()=>f("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[f("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),he=R(()=>f("span",null,"Preview mode enabled",-1)),me={key:0},ye=R(()=>f("div",{id:"__preview_background"},null,-1)),_e=R(()=>f("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[f("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),ke=R(()=>f("p",null,"Initializing the preview...",-1)),ge={key:0},Ce=R(()=>f("div",{id:"__preview_background"},null,-1)),Pe={id:"__preview_loader"},Te=Q({__name:"ContentPreviewMode",props:{previewToken:{type:Object,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(i){const o=i,c=["__nuxt_preview","__preview_enabled"],v=V(),_=W(),r=b(!0),k=b(!1),n=b(!1),l=b("");let s;const m=async()=>{S("previewToken").value="",N().query.preview="",await oe(N().path),se(()=>{j()}),r.value=!1,l.value="",document.body.classList.remove(...c)},A=async x=>{const w=await o.syncPreview(x);if(n.value!==!0){if(!w){setTimeout(()=>A(x),1e3);return}n.value=!0,v.callHook("nuxt-studio:preview:ready"),_.replace({query:{}}),window.parent&&window.self!==window.parent&&s.disconnect()}};return ee(async()=>{s=(await fe(()=>import("./index.9fea434a.js"),[],import.meta.url)).connect(`${o.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:o.previewToken.value}});let w;s.on("connect",()=>{w=setTimeout(()=>{n.value||(w=setTimeout(()=>{l.value="Preview sync timed out",n.value=!1},3e4),s.emit("draft:requestSync"))},3e4)});const C=()=>{w&&(clearTimeout(w),w=null)};s.on("draft:sync",async P=>{if(C(),!P){try{s.once("draft:ready",()=>{s.emit("draft:requestSync")}),await o.requestPreviewSyncAPI()}catch($){switch(C(),$.response.status){case 404:l.value="Preview draft not found",n.value=!1;break;default:l.value="An error occurred while syncing preview",n.value=!1}}return}A(P)}),s.on("draft:unauthorized",()=>{C(),l.value="Unauthorized preview token",n.value=!1}),s.on("disconnect",()=>{C()}),document.body.classList.add(...c),s.on("draft:update",P=>{k.value=!0,o.syncPreview(P),k.value=!1})}),te(()=>{document.body.classList.remove(...c)}),(x,w)=>(q(),L("div",null,[r.value?(q(),L("div",{key:0,id:"__nuxt_preview",class:ne({__preview_ready:n.value,__preview_refreshing:k.value})},[n.value?(q(),L(ae,{key:0},[we,he,f("button",{onClick:m}," Close ")],64)):U("",!0)],2)):U("",!0),F(z,{name:"preview-loading"},{default:J(()=>[r.value&&!n.value&&!l.value?(q(),L("div",me,[ye,f("div",{id:"__preview_loader"},[_e,ke,f("button",{onClick:m}," Cancel ")])])):U("",!0)]),_:1}),F(z,{name:"preview-loading"},{default:J(()=>[l.value?(q(),L("div",ge,[Ce,f("div",Pe,[f("p",null,ie(l.value),1),f("button",{onClick:m}," Exit preview ")])])):U("",!0)]),_:1})]))}}),Se=le(Te,[["__scopeId","data-v-0c109cae"]]),xe=(i=[],o,c)=>{const v=[...o||[]],_=[...c||[]],r=JSON.parse(JSON.stringify(i));for(const n of v)if(n.oldPath)if(_.splice(_.findIndex(s=>s.path===n.oldPath),1),v.find(s=>s.path===n.oldPath))r.push({path:n.path,parsed:n.parsed});else{const s=r.find(m=>m.path===n.oldPath);s&&(s.path=n.path,n.parsed?s.parsed=n.parsed:n.pathMeta&&["_file","_path","_id","_locale"].forEach(m=>{s.parsed[m]=n.pathMeta[m]}))}else if(n.new)r.push({path:n.path,parsed:n.parsed});else{const l=r.find(s=>s.path===n.path);l&&Object.assign(l,{path:n.path,parsed:n.parsed})}for(const n of _)r.splice(r.findIndex(l=>l.path===n.path),1);const k=new Intl.Collator(void 0,{numeric:!0});return r.sort((n,l)=>k.compare(n.path,l.path)),r},D=".studio",I={appConfig:`${D}/app.config.json`,tokensConfig:`${D}/tokens.config.json`},Ie=i=>{let o;return(...c)=>(o||(o=i()),o)};function X(i,o){for(const c in i){const v=o[c];c in o||delete i[c],v!==null&&typeof v=="object"&&X(i[c],o[c])}}function Y(i,o){for(const c in o){const v=o[c];v!==null&&typeof v=="object"?(i[c]=i[c]||{},Y(i[c],v)):i[c]=v}}const be=Ie(()=>JSON.parse(JSON.stringify(Z()))),Me=()=>{const i=V(),{studio:o,content:c}=ue().public;N();const v=be();let _;const r=B("studio-client-db",()=>null),k=B("studio-preview-db-files",()=>[]);r.value||(i.hook("content:storage",e=>{r.value=e}),de("/non-existing-path").findOne());const n=async(e,t,u=!0)=>{const p=S("previewToken",{sameSite:"none",secure:!0}),a=await e.getKeys(`${p.value}:`);await Promise.all(a.map(h=>e.removeItem(h)));const d=new Set(t.map(h=>h.parsed._id.split(":").shift()));await e.setItem(`${p.value}$`,JSON.stringify({ignoreSources:Array.from(d)})),await Promise.all(t.map(h=>e.setItem(`${p.value}:${h.parsed._id}`,JSON.stringify(h.parsed))))},l=e=>{const t=E(i,Z);Y(t,H(e,v)),e||X(t,v)},s=e=>{var u,p,a,d;const t=(d=(a=(p=(u=i==null?void 0:i.vueApp)==null?void 0:u._context)==null?void 0:p.config)==null?void 0:a.globalProperties)==null?void 0:d.$pinceauTheme;!t||!(t!=null&&t.updateTheme)||(_||(_=JSON.parse(JSON.stringify((t==null?void 0:t.theme.value)||{}))),E(i,t.updateTheme,[H(e,_)]))},m=async e=>{if(k.value=e.files=e.files||k.value||[],!r.value)return!1;const t=xe(e.files,e.additions,e.deletions),u=t.filter(d=>!d.path.startsWith(D));await n(r.value,u,(e.files||[]).length!==0);const p=t.find(d=>d.path===I.appConfig);l(p==null?void 0:p.parsed);const a=t.find(d=>d.path===I.tokensConfig);return s(a==null?void 0:a.parsed),$(),!0},A=async()=>{const e=S("previewToken",{sameSite:"none",secure:!0});await $fetch("api/projects/preview/sync",{baseURL:o==null?void 0:o.apiURL,method:"POST",params:{token:e.value}})},x=()=>{const e=S("previewToken",{sameSite:"none",secure:!0}),t=document.createElement("div");t.id="__nuxt_preview_wrapper",document.body.appendChild(t),pe(Se,{previewToken:e,apiURL:o==null?void 0:o.apiURL,syncPreview:m,requestPreviewSyncAPI:A}).mount(t)},w=async e=>{var p,a,d;const t=S("previewToken",{sameSite:"none",secure:!0});if(!e)return null;e=e.replace(/\/$/,"");let u=await((p=r.value)==null?void 0:p.getItem(`${t.value}:${e}`));return u||(u=await((a=r.value)==null?void 0:a.getItem(`cached:${e}`))),u||(u=u=await((d=r.value)==null?void 0:d.getItem(e))),u},C=e=>{var u;const t=S("previewToken",{sameSite:"none",secure:!0});r.value&&r.value.setItem(`${t.value}:${(u=e.parsed)==null?void 0:u._id}`,JSON.stringify(e.parsed))},P=async e=>{var u;const t=S("previewToken",{sameSite:"none",secure:!0});await((u=r.value)==null?void 0:u.removeItem(`${t.value}:${e}`))},$=async()=>{if(c!=null&&c.documentDriven){const{pages:e}=E(i,ve);for(const t in e.value)e.value[t]&&(e.value[t]=await w(e.value[t]._id))}E(i,j)};return{apiURL:o==null?void 0:o.apiURL,contentStorage:r,syncPreviewFiles:n,syncPreviewAppConfig:l,syncPreviewTokensConfig:s,requestPreviewSynchronization:A,findContentWithId:w,updateContent:C,removeContentWithId:P,requestRerender:$,mountPreviewUI:x,initiateIframeCommunication:G};function G(){if(!window.parent||window.self===window.parent)return;const e=W(),t=b(""),u=b(!0),p=a=>({path:a.path,query:O(a.query),params:O(a.params),fullPath:a.fullPath,meta:O(a.meta)});window.addEventListener("keydown",a=>{(a.metaKey||a.ctrlKey||a.altKey||a.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:a.key,metaKey:a.metaKey,ctrlKey:a.ctrlKey,shiftKey:a.shiftKey,altKey:a.altKey}},"*")}),window.addEventListener("message",async a=>{const{type:d,payload:h={}}=a.data||{};switch(d){case"nuxt-studio:editor:file-selected":{const y=await w(h.path);y&&(y._partial||y._path!==N().path&&(t.value=y._path,e.push(y._path)));break}case"nuxt-studio:editor:file-changed":{const{additions:y=[],deletions:M=[]}=h;for(const g of y)await C(g);for(const g of M)await P(g.path);$();break}case"nuxt-studio:config:file-changed":{const{additions:y=[],deletions:M=[]}=h,g=y.find(T=>T.path===I.appConfig);g&&l(g==null?void 0:g.parsed),M.find(T=>T.path===I.appConfig)&&l(void 0);const K=y.find(T=>T.path===I.tokensConfig);K&&s(K==null?void 0:K.parsed),M.find(T=>T.path===I.tokensConfig)&&s(void 0);break}}}),i.hook("content:document-driven:finish",({route:a,page:d,dedup:h})=>{if(h||u.value){u.value=!1;return}if(d&&t.value===d._path){t.value="";return}window.parent.postMessage({type:"nuxt-studio:preview:document-driven:finish",payload:{...p(a),contentId:d==null?void 0:d._id}},"*")}),i.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:p(N())},"*"),e==null||e.afterEach(a=>{window.parent.postMessage({type:"nuxt-studio:preview:route-changed",payload:p(a)},"*")})})}};export{Me as useStudio};
