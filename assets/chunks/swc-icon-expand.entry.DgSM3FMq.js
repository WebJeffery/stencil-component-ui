import{j as i,k as n}from"./theme.CN6nmgZd.js";import"./framework.DIU08dKJ.js";const h=class{constructor(s){i(this,s),this.size="20px",this.color=void 0,this.styles=void 0,this.classNames="",this.rotate=void 0,this.spin=void 0}render(){const s=Object.assign({color:this.color},this.styles||{});if(this.size){const e=Number.isNaN(Number(this.size))?this.size:this.size+"px";s.width=e,s.height=e}this.rotate&&Number.isSafeInteger(this.rotate)&&(s.transform=`rotate(${this.rotate}deg)`);let t="swc-icon";return this.classNames&&(t+=" "+this.classNames),this.spin&&(t+=" is-spin"),n("div",{key:"c6d442308999319da9232d5495823e6e417b3ba3",class:t,style:s,innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M128 192h768v128H128zm0 256h512v128H128zm0 256h768v128H128zm576-352 192 160-192 128z"/></svg>'})}};export{h as swc_icon_expand};
