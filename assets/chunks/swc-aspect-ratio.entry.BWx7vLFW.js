import{r as a,h as e,H as h,w as o,g as c}from"./theme.DBVOodcl.js";import"./framework.B8ZbuilT.js";const r=":host{display:block}",n=r,p=class{constructor(t){a(this,t),this.aspectRatio="1/1",this.width="100%",this.height=void 0}watchAspectRatioHandler(t){if(t.split("/").length!==2)throw new Error("aspectRatio attribute is must like `1/2`")}emitResizeHandler(){requestAnimationFrame(this.resize.bind(this))}getAspectRatio(){const t=this.aspectRatio.split("/");return{widthRatio:parseFloat(t[0])||1,heightRatio:parseFloat(t[1])||1}}resize(){const t=this.getAspectRatio(),s=this.el.getBoundingClientRect().width/t.widthRatio*t.heightRatio;this.height=`${s}px`}render(){return e(h,{key:"1562ddc5b81d6facfbdeae98ced2e38f8aca36d8",style:{width:this.width,height:this.height}},e("slot",{key:"341400c05f36bd51582e228d6215937774246e62"}))}componentWillLoad(){o(this.resize.bind(this))}get el(){return c(this)}static get watchers(){return{aspectRatio:["watchAspectRatioHandler"]}}};p.style=n;export{p as swc_aspect_ratio};
