import{r as i,c as o,w as l,h as s,H as c}from"./theme.BlE6xyWi.js";import"./framework.DIU08dKJ.js";const d=":host{display:block;position:relative;width:100%}:host .menu{display:none;flex-direction:column;filter:drop-shadow(0px 0 16px rgba(17, 17, 26, 0.1));min-width:120px;position:absolute;top:0;left:0;background-color:#fff;border-radius:4px;z-index:var(--ivy-contextmenu-z-index, 10)}:host([visible]) .menu{display:inline-flex;animation:zoomIn 0.3s forwards}@keyframes zoomIn{from{opacity:0;transform:scale3d(0.3, 0.3, 0.3)}50%{opacity:1}}",r=d,a=class{constructor(e){i(this,e),this.swcCommand=o(this,"swcCommand",7),this.wrap=!1,this.x=0,this.y=0,this.visible=!1}contextmenuHandler(e){e.preventDefault(),this.close(),l(()=>{const t=e.layerX,n=e.layerY;this.openHandler({x:t,y:n})})}commandHandler(e){const t=e.target;if(t.nodeName.toLowerCase()==="ivy-contextmenu-item"){const n=t.getAttribute("command");this.swcCommand.emit(n),this.close()}}render(){return s(c,{key:"d19f77bb19200036496d74af7eff89207b4ecce9",visible:this.visible,onContextmenu:this.contextmenuHandler.bind(this)},s("slot",{key:"0674b9689bb708c921bcd53c7d3e4247d4c47b84"}),s("div",{key:"fe7e008f265bfcdc617011b6f2c31de83208540c",class:"menu",style:{top:`${this.y}px`,left:`${this.x}px`},onClick:this.commandHandler.bind(this)},s("slot",{key:"df639288f566eabd4f6eba423d490c9eea9f02dc",name:"menu"})))}openHandler(e={x:0,y:0}){this.x=e.x,this.y=e.y,this.visible=!0}close(){this.visible=!1}scrollHandler(){this.visible=!1}componentDidLoad(){window.addEventListener("scroll",this.scrollHandler.bind(this)),window.addEventListener("click",this.scrollHandler.bind(this)),window.addEventListener("contextmenu",this.scrollHandler.bind(this))}disconnectedCallback(){window.removeEventListener("scroll",this.scrollHandler.bind(this)),window.removeEventListener("click",this.scrollHandler.bind(this)),window.removeEventListener("contextmenu",this.scrollHandler.bind(this))}};a.style=r;export{a as swc_contextmenu};