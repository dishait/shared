import{a as m,aa as b,k as _,o as n,b as l,e as y,f as h,w,c as d,u as f,J as B,x as C,h as S,a1 as k,a2 as x,j as v,t as $,i as I,P}from"./entry.ab63fddb.js";import{u as z}from"./index.c76676d7.js";/* empty css                      */import"./entry.bd32314b.js";const N=e=>(k("data-v-6b5adef2"),e=e(),x(),e),T=N(()=>y("span",{class:"sr-only"},"Copy to clipboard",-1)),V={class:"icon-wrapper"},A=m({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const a=e,{copy:s}=z(),{prose:o}=b(),t=_("init"),c=g=>{s(a.content).then(()=>{t.value="copied",setTimeout(()=>{t.value="init"},1e3)}).catch(p=>{console.warn("Couldn't copy to clipboard!",p)})};return(g,p)=>{const i=S;return n(),l("button",{class:C([(e.show||t.value==="copied")&&"show"]),onClick:c},[T,y("span",V,[h(B,{name:"fade"},{default:w(()=>{var r,u;return[t.value==="copied"?(n(),d(i,{key:0,name:(r=f(o).copyButton)==null?void 0:r.iconCopied,size:"18",class:"copied"},null,8,["name"])):(n(),d(i,{key:1,name:(u=f(o).copyButton)==null?void 0:u.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),M=v(A,[["__scopeId","data-v-6b5adef2"]]),j={key:0,class:"filename"},D=m({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const a=_(!1);return(s,o)=>{const t=M;return n(),l("div",{class:C([[`highlight-${e.language}`],"prose-code"]),onMouseenter:o[0]||(o[0]=c=>a.value=!0),onMouseleave:o[1]||(o[1]=c=>a.value=!1)},[e.filename?(n(),l("span",j,$(e.filename),1)):I("",!0),P(s.$slots,"default",{},void 0,!0),h(t,{show:a.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),G=v(D,[["__scopeId","data-v-3cc56bf7"]]);export{G as default};
