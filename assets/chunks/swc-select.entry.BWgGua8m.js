import{r,c,h as i,H as l,g as s}from"./theme.DBVOodcl.js";import"./framework.B8ZbuilT.js";const n=":host{display:block;position:relative}.ivy-input-inner{background-color:#fff;background-image:none;border-radius:var(--ivy-border-radius, 4px);border:1px solid #dcdfe6;box-sizing:border-box;color:#606266;display:inline-block;font-size:inherit;height:34px;line-height:34px;outline:none;padding:0 15px;transition:border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);width:100%;font-size:var(--ivy-font-size, 14px)}.ivy-input-inner::input-placeholder{color:#c0c4cc;font-size:14px}.ivy-input-inner::-webkit-input-placeholder{color:#c0c4cc;font-size:14px}.ivy-input-inner::-moz-input-placeholder{color:#c0c4cc;font-size:14px}.ivy-input-inner:-moz-input-placeholder{color:#c0c4cc;font-size:14px}.ivy-input-inner:-ms-input-placeholder{color:#c0c4cc;font-size:14px}.ivy-input-inner:active,.ivy-input-inner:hover,.ivy-input-inner:focus{border-color:var(--ivy-color-primary, #409eff)}:host([disabled]){cursor:not-allowed}:host([disabled]) .ivy-input-inner{background-color:#f5f7fa;border-color:#e4e7ed;color:#c0c4cc;cursor:not-allowed}.select-option-wrap{position:absolute;width:100%;min-width:240px;left:0;top:40px;display:none;border-radius:2px;overflow:hidden;z-index:10}:host([visible]) .select-option-wrap{display:block}.select-option-scroll{overflow:auto;overflow:overlay;background-color:#fff;max-height:274px;filter:drop-shadow(0px 0 16px rgba(17, 17, 26, 0.1))}.select-option{margin:6px 0}.select-arrow{height:6px;width:6px;position:absolute}.select-option-scroll::-webkit-scrollbar{width:6px;height:6px;background-color:#fff;border-radius:2px}.select-option-scroll::-webkit-scrollbar-thumb{background-color:rgba(144, 147, 153, 1);border-radius:2px}.select-option-scroll::-webkit-scrollbar-track{background-color:rgba(144, 147, 153, 0.3);border-radius:2px}",a=n,d=class{constructor(e){r(this,e),this.changed=c(this,"changed",7),this.drop=null,this.visible=!1,this.value=void 0,this.placeholder=void 0,this.disabled=!1}windowClickHandler(e){this.el.contains(e.target)||this.hideHandler()}eventClickHandler(e){const t=e.target;if(t.nodeName.toLowerCase()==="ivy-option"){const o=t.getAttribute("value");o!==this.value&&(this.value=o,this.changed.emit(o)),this.visible=!1}}focusHandler(){this.disabled||(this.visible=!0)}hideHandler(){this.visible=!1}render(){return i(l,{key:"35645d12cf59a17a419da0458a286bff83bb3b9d",visible:this.visible},i("input",{key:"d3fc0094646c38e80aad7375c4c64c2cb080e15c",type:"text",placeholder:this.placeholder,readonly:!0,value:this.value,class:"ivy-input-inner",onFocus:this.focusHandler.bind(this)}),i("div",{key:"ab33678ab245cf706a5c3e4edf07a40f3aff7c3b",class:"select-option-wrap",ref:e=>this.drop=e},i("div",{key:"221b4621dd708f470cda2d8a3dda7b6149966fd9",class:"select-arrow"}),i("div",{key:"39fae0dae3e5a2e5663db5895458cf031384fd87",class:"select-option-scroll"},i("div",{key:"3771530bb21f0cae71b847368d1f56e2a471da46",class:"select-option",onClick:this.eventClickHandler.bind(this)},i("slot",{key:"9c94223b81a5409ea4800a5fba2e7e9921db79d8"})))))}get el(){return s(this)}};d.style=a;export{d as swc_select};
