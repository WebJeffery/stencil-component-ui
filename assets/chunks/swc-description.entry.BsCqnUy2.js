import{r as a,h as r,H as c,g as h}from"./theme.BlE6xyWi.js";import"./framework.DIU08dKJ.js";const b=":host{display:block;border-radius:var(--ivy-border-radius, 4px);--ivy-description-label-bg-color:#f5f7fa;font-size:var(--ivy-font-size, 14px)}:host(:not(:defined)){display:none}.header{font-size:16px;padding:12px 0}.wrap{display:flex;box-sizing:border-box;flex-wrap:wrap}:host([border]){border:1px solid var(--ivy-border-color, #dcdfe6)}:host([border]) .header{border-bottom:1px solid var(--ivy-border-color, #dcdfe6)}",f=b,p=class{constructor(t){a(this,t),this.header=void 0,this.border=!1,this.columns=3,this.labelWidth=void 0,this.gutter="32"}render(){return r(c,{key:"ddc11cdeed46487813f0ee7bff8fb3ca1188ea44",border:this.border},r("div",{key:"d84516137dadef0a7c213482493e4fe5d1b2055b",class:"header",style:{padding:`12px ${parseFloat(this.gutter)/2}px`,display:this.header?null:"none"}},this.header),r("div",{key:"8f0305ca930be37e61138ff78adf123e7fff4053",class:"wrap"},r("slot",{key:"0d61b9d88736c3c0a91494a05f90c4081f754816"})))}componentDidLoad(){const t=this.el.querySelectorAll("swc-description-item"),i=t.length;for(let s=0;s<i;s++){const e=t[s],n=e.getAttribute("label-width"),d=Number(e.span||"1");e.style.width=d>=this.columns?"100%":`${d/this.columns*100}%`;const l=`${parseInt(this.gutter)/2}px`;e.setAttribute("gutter",l),[void 0,null,""].includes(n)&&this.labelWidth&&e.setAttribute("label-width",this.labelWidth);const o=s+1;(o%this.columns===0||i===o)&&(e.style.borderRight="none"),i/this.columns*this.columns<=o&&(e.style.borderBottom="none"),this.border&&e.setAttribute("border","true")}}get el(){return h(this)}};p.style=f;export{p as swc_description};