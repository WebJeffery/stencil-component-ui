var i=(r,n,t)=>new Promise((d,c)=>{var l=e=>{try{s(t.next(e))}catch(o){c(o)}},h=e=>{try{s(t.throw(e))}catch(o){c(o)}},s=e=>e.done?d(e.value):Promise.resolve(e.value).then(l,h);s((t=t.apply(r,n)).next())});import{r as p,h as a,H as f}from"./theme.B7V_yWaD.js";import"./framework.DIU08dKJ.js";const b=":host{display:inline-flex}.separator{padding:0 8px;user-select:none}:host(:first-child) .separator{display:none;padding-left:0}.content{cursor:default;transition:color 0.15s}:host([href]) .content:hover{color:var(--ivy-color-primary, #409eff);cursor:pointer}",u=b,m=class{constructor(r){p(this,r),this.separator="/",this.href=void 0,this.blank=!1}routeJump(){this.blank?window.open(this.href):window.location.href=this.href}render(){return a(f,{key:"617f975672a9dc79ad7e2c35e4e8024e67a7a4c3"},a("div",{key:"5f42bed782a6e978a0cca0202b0c7576d4c603c4",class:"separator",part:"separator"},this.separator),a("div",{key:"47741bf7782b092a99a8507aaa76e8cc99621507",class:"content",onClick:this.routeJump.bind(this)},a("slot",{key:"abe9b30c57c2d0c51ba8da508f64d2613a6a1871"})))}setSeparator(r){return i(this,null,function*(){this.separator=r})}};m.style=u;export{m as swc_breadcrumb_item};