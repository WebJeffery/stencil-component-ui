import{j as e,k as a}from"./theme.BlE6xyWi.js";import"./framework.DIU08dKJ.js";const n=class{constructor(s){e(this,s),this.size="20px",this.color=void 0,this.styles=void 0,this.classNames="",this.rotate=void 0,this.spin=void 0}render(){const s=Object.assign({color:this.color},this.styles||{});if(this.size){const i=Number.isNaN(Number(this.size))?this.size:this.size+"px";s.width=i,s.height=i}this.rotate&&Number.isSafeInteger(this.rotate)&&(s.transform=`rotate(${this.rotate}deg)`);let t="swc-icon";return this.classNames&&(t+=" "+this.classNames),this.spin&&(t+=" is-spin"),a("div",{key:"5d5f8ac9e08d8747f964917c2276f2ced66ce239",class:t,style:s,innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64z"/></svg>'})}};export{n as swc_icon_monitor};