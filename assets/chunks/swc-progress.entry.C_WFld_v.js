var c=(r,l,s)=>new Promise((n,i)=>{var d=e=>{try{o(s.next(e))}catch(a){i(a)}},h=e=>{try{o(s.throw(e))}catch(a){i(a)}},o=e=>e.done?n(e.value):Promise.resolve(e.value).then(d,h);o((s=s.apply(r,l)).next())});import{r as f,h as t,H as v}from"./theme.BlE6xyWi.js";import"./framework.DIU08dKJ.js";const p=":host{display:flex;align-items:center}.bar{background-color:var(--ivy-progress-track-color, #ebeef5);height:var(--ivy-progress-stroke-width, 6px);border-radius:calc(var(--ivy-progress-stroke-width, 6px) / 2);overflow:hidden;flex:auto}.inner{background-color:var(--ivy-progress-color, #409eff);height:100%;width:0%;border-radius:calc(var(--ivy-progress-stroke-width, 6px) / 2);transition:width 0.3s}.text{font-size:var(--ivy-progress-text-size, 12px);color:var(--ivy-progress-text-color, 12px);flex:none;margin-left:6px}",g=p,y=class{constructor(r){f(this,r),this.value="0",this.color=void 0,this.formatter="{value}%",this.showText=!1}render(){return t(v,{key:"259dd569af554fe13515df0c2a9e3f8fe9eed947"},t("div",{key:"251fb4d7f0254764bc23407694db8973f46b8e22",class:"bar"},t("div",{key:"772bd0ba3a4a64cec23a43a8cd317a35a0ca15a9",class:"inner",style:{width:`${this.value}%`,"--ivy-progress-color":this.color?this.color:null}})),t("span",{key:"f531e35324358335b49e07361aae067dbfd2a0cc",class:"text",style:{display:this.showText?"inline":"none"}},this.formatter.replace("{value}",this.value.toString())))}setValue(r){return c(this,null,function*(){this.value=r.toString()})}};y.style=g;export{y as swc_progress};