import{j as i,k as r}from"./theme.CN6nmgZd.js";import"./framework.DIU08dKJ.js";const n=class{constructor(s){i(this,s),this.size="20px",this.color=void 0,this.styles=void 0,this.classNames="",this.rotate=void 0,this.spin=void 0}render(){const s=Object.assign({color:this.color},this.styles||{});if(this.size){const t=Number.isNaN(Number(this.size))?this.size:this.size+"px";s.width=t,s.height=t}this.rotate&&Number.isSafeInteger(this.rotate)&&(s.transform=`rotate(${this.rotate}deg)`);let e="swc-icon";return this.classNames&&(e+=" "+this.classNames),this.spin&&(e+=" is-spin"),r("div",{key:"be5c18de00e17e8104b0655854ce967928c996ef",class:e,style:s,innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248z"/></svg>'})}};export{n as swc_icon_upload};
