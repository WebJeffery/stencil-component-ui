import{j as i,k as a}from"./theme.CN6nmgZd.js";import"./framework.DIU08dKJ.js";const o=class{constructor(s){i(this,s),this.size="20px",this.color=void 0,this.styles=void 0,this.classNames="",this.rotate=void 0,this.spin=void 0}render(){const s=Object.assign({color:this.color},this.styles||{});if(this.size){const e=Number.isNaN(Number(this.size))?this.size:this.size+"px";s.width=e,s.height=e}this.rotate&&Number.isSafeInteger(this.rotate)&&(s.transform=`rotate(${this.rotate}deg)`);let t="swc-icon";return this.classNames&&(t+=" "+this.classNames),this.spin&&(t+=" is-spin"),a("div",{key:"c45e9514faad425910e15d0248cfe63dd376bab3",class:t,style:s,innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M224 128v704h576V128zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32"/><path fill="currentColor" d="M64 832h896v64H64zm256-640h128v96H320z"/><path fill="currentColor" d="M384 832h256v-64a128 128 0 1 0-256 0zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192M320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z"/></svg>'})}};export{o as swc_icon_school};
