import{j as e,k as a}from"./theme.BlE6xyWi.js";import"./framework.DIU08dKJ.js";const h=class{constructor(s){e(this,s),this.size="20px",this.color=void 0,this.styles=void 0,this.classNames="",this.rotate=void 0,this.spin=void 0}render(){const s=Object.assign({color:this.color},this.styles||{});if(this.size){const i=Number.isNaN(Number(this.size))?this.size:this.size+"px";s.width=i,s.height=i}this.rotate&&Number.isSafeInteger(this.rotate)&&(s.transform=`rotate(${this.rotate}deg)`);let t="swc-icon";return this.classNames&&(t+=" "+this.classNames),this.spin&&(t+=" is-spin"),a("div",{key:"31661e5ad5dcc422a7a143652f45cb9c598c244c",class:t,style:s,innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M192 128v768h640V128zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h192v64H320zm0 384h384v64H320z"/></svg>'})}};export{h as swc_icon_tickets};