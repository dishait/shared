import f from"./TabsHeader.8847ccd1.js";import{a as x,at as g,r as n,f as h,o as r,i as l,c as S,u as c,l as y,_ as k}from"./entry.9344b24b.js";import"./entry.8de1f546.js";const $={class:"sandbox"},w=["src"],B={key:2},C=x({__name:"Sandbox",props:{src:{type:String,default:""},repo:{type:String,default:""},branch:{type:String,default:""},dir:{type:String,default:""},file:{type:String,default:"app.vue"}},setup(i){const e=i,p=g(),o={CodeSandBox:()=>`https://codesandbox.io/embed/github/${e.repo}/tree/${e.branch}/${e.dir}?hidenavigation=1&theme=${p.value}`,StackBlitz:()=>`https://stackblitz.com/github/${e.repo}/tree/${e.branch}/${e.dir}?embed=1&file=${e.file}&theme=${p.value}`},u=Object.keys(o).map(t=>({label:t})),d=n(-1),b=n(),s=n(""),a=n(""),_=t=>{a.value=t,s.value=e.src||o[a.value](),localStorage.setItem("docus_sandbox",t)},m=t=>{d.value=t,_(u[t].label)};return h(()=>{a.value=window.localStorage.getItem("docus_sandbox")||"CodeSandBox",s.value=e.src||o[a.value](),d.value=Object.keys(o).indexOf(a.value)}),(t,I)=>{const v=f;return r(),l("div",$,[i.src?y("",!0):(r(),S(v,{key:0,ref_key:"tabs",ref:b,"active-tab-index":c(d),tabs:c(u),"onUpdate:activeTabIndex":m},null,8,["active-tab-index","tabs"])),c(s)?(r(),l("iframe",{key:1,src:c(s),title:"Sandbox editor",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"},null,8,w)):(r(),l("span",B,"Loading Sandbox..."))])}}});const j=k(C,[["__scopeId","data-v-ccd03b99"]]);export{j as default};
