import{j as i,k as r}from"./theme.BlE6xyWi.js";import"./framework.DIU08dKJ.js";const n=class{constructor(s){i(this,s),this.size="20px",this.color=void 0,this.styles=void 0,this.classNames="",this.rotate=void 0,this.spin=void 0}render(){const s=Object.assign({color:this.color},this.styles||{});if(this.size){const e=Number.isNaN(Number(this.size))?this.size:this.size+"px";s.width=e,s.height=e}this.rotate&&Number.isSafeInteger(this.rotate)&&(s.transform=`rotate(${this.rotate}deg)`);let t="swc-icon";return this.classNames&&(t+=" "+this.classNames),this.spin&&(t+=" is-spin"),r("div",{key:"ec98afa0654acc772e720ac2610c6126e195e864",class:t,style:s,innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512m0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640"/><path fill="currentColor" d="M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32"/><path fill="currentColor" d="M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32"/></svg>'})}};export{n as swc_icon_female};