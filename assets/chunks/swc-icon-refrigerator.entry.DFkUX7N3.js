import{j as i,k as a}from"./theme.BlE6xyWi.js";import"./framework.DIU08dKJ.js";const o=class{constructor(s){i(this,s),this.size="20px",this.color=void 0,this.styles=void 0,this.classNames="",this.rotate=void 0,this.spin=void 0}render(){const s=Object.assign({color:this.color},this.styles||{});if(this.size){const e=Number.isNaN(Number(this.size))?this.size:this.size+"px";s.width=e,s.height=e}this.rotate&&Number.isSafeInteger(this.rotate)&&(s.transform=`rotate(${this.rotate}deg)`);let t="swc-icon";return this.classNames&&(t+=" "+this.classNames),this.spin&&(t+=" is-spin"),a("div",{key:"49843f73bcda86a7a386ff01bc5ecdff27664309",class:t,style:s,innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96m32 224h64v96h-64zm0 288h64v96h-64z"/></svg>'})}};export{o as swc_icon_refrigerator};