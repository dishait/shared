import{u}from"./asyncData.3a12cda2.js";import{a as c,E as d,p as l,ad as f,a9 as v,aw as _,ar as g,a5 as y,U as m,_ as h}from"./entry.ab63fddb.js";/* empty css             *//* empty css                       *//* empty css                                   *//* empty css                      *//* empty css                   *//* empty css                           *//* empty css                            *//* empty css                  *//* empty css                         *//* empty css                         *//* empty css                    *//* empty css                           *//* empty css                            *//* empty css                      *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                    *//* empty css                   *//* empty css                        *//* empty css                       *//* empty css                    *//* empty css                    *//* empty css                       *//* empty css                    *//* empty css                    *//* empty css                  *//* empty css                    *//* empty css                      *//* empty css                       *//* empty css                      *//* empty css                     *//* empty css                 *//* empty css                    *//* empty css                     *//* empty css                        *//* empty css                           *//* empty css                      *//* empty css                 *//* empty css                     *//* empty css                       *//* empty css                                     *//* empty css                                    *//* empty css                                *//* empty css                               *//* empty css                    */import"./entry.bd32314b.js";const Ct=c({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),r=l(()=>{var o;return typeof((o=t.value)==null?void 0:o.params)=="function"?t.value.params():t.value});if(!r.value&&f("dd-navigation").value){const{navigation:o}=v();return{navigation:o}}const{data:p}=await u(`content-navigation-${g(r.value)}`,()=>_(r.value));return{navigation:p}},render(e){const t=y(),{navigation:r}=e,p=i=>m(h,{to:i._path},()=>i.title),o=(i,n)=>m("ul",n?{"data-level":n}:null,i.map(a=>a.children?m("li",null,[p(a),o(a.children,n+1)]):m("li",null,p(a)))),s=i=>o(i,0);return t!=null&&t.default?t.default({navigation:r,...this.$attrs}):s(r)}});export{Ct as default};
