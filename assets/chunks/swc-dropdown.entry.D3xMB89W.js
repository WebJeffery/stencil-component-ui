import{r as s,c as r,h as o,H as c,g as a}from"./theme.DBVOodcl.js";import"./framework.B8ZbuilT.js";const l=":host{display:inline-block;position:relative}.ivy-input-inner{box-sizing:border-box;color:#606266;display:inline-block;font-size:inherit;transition:border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);cursor:default}:host([disabled]){cursor:not-allowed}:host([disabled]) .ivy-input-inner{background-color:#f5f7fa;border-color:#e4e7ed;color:#c0c4cc;cursor:not-allowed}.select-option-wrap{position:absolute;max-width:80vw;left:0;top:calc(100% + 4px);display:none;border-radius:4px;overflow:hidden}:host([visible]) .select-option-wrap{display:block}.select-option-scroll{overflow:auto;overflow:overlay;background-color:#fff;max-height:274px;filter:drop-shadow(0px 0 16px rgba(17, 17, 26, 0.1))}.select-option{margin:6px 0}.select-option-scroll::-webkit-scrollbar{width:6px;height:6px;background-color:#fff;border-radius:2px}.select-option-scroll::-webkit-scrollbar-thumb{background-color:rgba(144, 147, 153, 1);border-radius:2px}.select-option-scroll::-webkit-scrollbar-track{background-color:rgba(144, 147, 153, 0.3);border-radius:2px}",n=l,d=class{constructor(e){s(this,e),this.swcChange=r(this,"swcChange",7),this.drop=null,this.visible=!1,this.disabled=!1}windowClickHandler(e){this.el.contains(e.target)||this.hideHandler()}eventClickHandler(e){const i=e.target;if(i.nodeName.toLowerCase()==="ivy-dropdown-item"){const t=i.getAttribute("command");this.swcChange.emit(t),this.visible=!1}}focusHandler(){this.disabled||(this.visible=!0)}hideHandler(){this.visible=!1}render(){return o(c,{key:"b4732ea1ae6e1892832758b961a4a1cfec1b712c",visible:this.visible},o("div",{key:"2c8f0f563c565dec9e6ec3a7efac5a73c97caf53",class:"ivy-input-inner",onClick:this.focusHandler.bind(this)},o("slot",{key:"cca87486bb907e50f7eec9c1fca25dac6f743c50"})),o("div",{key:"4d9cd2b96e16c2581aa2244b7c2acf0c7beef7df",class:"select-option-wrap",ref:e=>this.drop=e},o("div",{key:"b66ede8ecbbf61c9b98c08cfe9ff5e02a3e6340f",class:"select-option-scroll"},o("div",{key:"3115d4638a957f0032668a53948644dd08ea4deb",class:"select-option",onClick:this.eventClickHandler.bind(this)},o("slot",{key:"ae2195da3dd1026b04418a125193b1a2b3400e88",name:"menu"})))))}get el(){return a(this)}};d.style=n;export{d as swc_dropdown};
