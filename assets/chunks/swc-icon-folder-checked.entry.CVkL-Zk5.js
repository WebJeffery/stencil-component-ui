import{j as i,k as r}from"./theme.BlE6xyWi.js";import"./framework.DIU08dKJ.js";const h=class{constructor(s){i(this,s),this.size="20px",this.color=void 0,this.styles=void 0,this.classNames="",this.rotate=void 0,this.spin=void 0}render(){const s=Object.assign({color:this.color},this.styles||{});if(this.size){const t=Number.isNaN(Number(this.size))?this.size:this.size+"px";s.width=t,s.height=t}this.rotate&&Number.isSafeInteger(this.rotate)&&(s.transform=`rotate(${this.rotate}deg)`);let e="swc-icon";return this.classNames&&(e+=" "+this.classNames),this.spin&&(e+=" is-spin"),r("div",{key:"67e457572200d8eef020d88780963da697f43011",class:e,style:s,innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M128 192v640h768V320H485.76L357.504 192zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32m414.08 502.144 180.992-180.992L736.32 494.4 510.08 720.64l-158.4-158.336 45.248-45.312z"/></svg>'})}};export{h as swc_icon_folder_checked};