import{j as t,k as r}from"./theme.BlE6xyWi.js";import"./framework.DIU08dKJ.js";const c=class{constructor(s){t(this,s),this.size="20px",this.color=void 0,this.styles=void 0,this.classNames="",this.rotate=void 0,this.spin=void 0}render(){const s=Object.assign({color:this.color},this.styles||{});if(this.size){const i=Number.isNaN(Number(this.size))?this.size:this.size+"px";s.width=i,s.height=i}this.rotate&&Number.isSafeInteger(this.rotate)&&(s.transform=`rotate(${this.rotate}deg)`);let e="swc-icon";return this.classNames&&(e+=" "+this.classNames),this.spin&&(e+=" is-spin"),r("div",{key:"c3f77062a9795293d405674e424fed050447293c",class:e,style:s,innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0z"/></svg>'})}};export{c as swc_icon_circle_plus_filled};