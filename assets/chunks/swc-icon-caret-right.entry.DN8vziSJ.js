import{j as i,k as r}from"./theme.BlE6xyWi.js";import"./framework.DIU08dKJ.js";const o=class{constructor(s){i(this,s),this.size="20px",this.color=void 0,this.styles=void 0,this.classNames="",this.rotate=void 0,this.spin=void 0}render(){const s=Object.assign({color:this.color},this.styles||{});if(this.size){const e=Number.isNaN(Number(this.size))?this.size:this.size+"px";s.width=e,s.height=e}this.rotate&&Number.isSafeInteger(this.rotate)&&(s.transform=`rotate(${this.rotate}deg)`);let t="swc-icon";return this.classNames&&(t+=" "+this.classNames),this.spin&&(t+=" is-spin"),r("div",{key:"76e0b8a0faa45016d498ee891de8b03ca5d79bfb",class:t,style:s,innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M384 192v640l384-320.064z"/></svg>'})}};export{o as swc_icon_caret_right};