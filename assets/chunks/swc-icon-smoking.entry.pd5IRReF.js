import{j as e,k as a}from"./theme.CN6nmgZd.js";import"./framework.DIU08dKJ.js";const n=class{constructor(s){e(this,s),this.size="20px",this.color=void 0,this.styles=void 0,this.classNames="",this.rotate=void 0,this.spin=void 0}render(){const s=Object.assign({color:this.color},this.styles||{});if(this.size){const i=Number.isNaN(Number(this.size))?this.size:this.size+"px";s.width=i,s.height=i}this.rotate&&Number.isSafeInteger(this.rotate)&&(s.transform=`rotate(${this.rotate}deg)`);let t="swc-icon";return this.classNames&&(t+=" "+this.classNames),this.spin&&(t+=" is-spin"),a("div",{key:"2daad475f0ad74c38a467e722fdd5fca24aec720",class:t,style:s,innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M256 576v128h640V576zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32"/><path fill="currentColor" d="M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"/></svg>'})}};export{n as swc_icon_smoking};
