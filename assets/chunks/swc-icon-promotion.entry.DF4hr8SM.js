import{j as e,k as o}from"./theme.CN6nmgZd.js";import"./framework.DIU08dKJ.js";const a=class{constructor(s){e(this,s),this.size="20px",this.color=void 0,this.styles=void 0,this.classNames="",this.rotate=void 0,this.spin=void 0}render(){const s=Object.assign({color:this.color},this.styles||{});if(this.size){const i=Number.isNaN(Number(this.size))?this.size:this.size+"px";s.width=i,s.height=i}this.rotate&&Number.isSafeInteger(this.rotate)&&(s.transform=`rotate(${this.rotate}deg)`);let t="swc-icon";return this.classNames&&(t+=" "+this.classNames),this.spin&&(t+=" is-spin"),o("div",{key:"5d2375f0122c2dc7f83da5386e10503562c69494",class:t,style:s,innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472zm256 512V657.024L512 768z"/></svg>'})}};export{a as swc_icon_promotion};
