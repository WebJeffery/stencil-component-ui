import{r,c,h as i,H as l,g as s}from"./theme.BlE6xyWi.js";import"./framework.DIU08dKJ.js";const n=":host{display:block;position:relative}.ivy-input-inner{background-color:#fff;background-image:none;border-radius:var(--ivy-border-radius, 4px);border:1px solid #dcdfe6;box-sizing:border-box;color:#606266;display:inline-block;font-size:inherit;height:34px;line-height:34px;outline:none;padding:0 15px;transition:border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);width:100%;font-size:var(--ivy-font-size, 14px)}.ivy-input-inner::input-placeholder{color:#c0c4cc;font-size:14px}.ivy-input-inner::-webkit-input-placeholder{color:#c0c4cc;font-size:14px}.ivy-input-inner::-moz-input-placeholder{color:#c0c4cc;font-size:14px}.ivy-input-inner:-moz-input-placeholder{color:#c0c4cc;font-size:14px}.ivy-input-inner:-ms-input-placeholder{color:#c0c4cc;font-size:14px}.ivy-input-inner:active,.ivy-input-inner:hover,.ivy-input-inner:focus{border-color:var(--ivy-color-primary, #409eff)}:host([disabled]){cursor:not-allowed}:host([disabled]) .ivy-input-inner{background-color:#f5f7fa;border-color:#e4e7ed;color:#c0c4cc;cursor:not-allowed}.select-option-wrap{position:absolute;width:100%;min-width:240px;left:0;top:40px;display:none;border-radius:2px;overflow:hidden;z-index:10}:host([visible]) .select-option-wrap{display:block}.select-option-scroll{overflow:auto;overflow:overlay;background-color:#fff;max-height:274px;filter:drop-shadow(0px 0 16px rgba(17, 17, 26, 0.1))}.select-option{margin:6px 0}.select-arrow{height:6px;width:6px;position:absolute}.select-option-scroll::-webkit-scrollbar{width:6px;height:6px;background-color:#fff;border-radius:2px}.select-option-scroll::-webkit-scrollbar-thumb{background-color:rgba(144, 147, 153, 1);border-radius:2px}.select-option-scroll::-webkit-scrollbar-track{background-color:rgba(144, 147, 153, 0.3);border-radius:2px}",a=n,d=class{constructor(e){r(this,e),this.changed=c(this,"changed",7),this.drop=null,this.visible=!1,this.value=void 0,this.placeholder=void 0,this.disabled=!1}windowClickHandler(e){this.el.contains(e.target)||this.hideHandler()}eventClickHandler(e){const t=e.target;if(t.nodeName.toLowerCase()==="ivy-option"){const o=t.getAttribute("value");o!==this.value&&(this.value=o,this.changed.emit(o)),this.visible=!1}}focusHandler(){this.disabled||(this.visible=!0)}hideHandler(){this.visible=!1}render(){return i(l,{key:"520befa011a830eb28562fc0b2b208be46bf4b25",visible:this.visible},i("input",{key:"4f9f62d3b94cce84ea533e709323b43d28bef36d",type:"text",placeholder:this.placeholder,readonly:!0,value:this.value,class:"ivy-input-inner",onFocus:this.focusHandler.bind(this)}),i("div",{key:"2fac4e0ada65c67319730d896984558263ac48bc",class:"select-option-wrap",ref:e=>this.drop=e},i("div",{key:"b0ddf20a8fe1dfd80ed99727070aa2327f8ffa5e",class:"select-arrow"}),i("div",{key:"cbbf9735e21718924242e67b322ea4ec05f9ece4",class:"select-option-scroll"},i("div",{key:"deb7dc7756c7af088c7aa3558ce41aa84821df4e",class:"select-option",onClick:this.eventClickHandler.bind(this)},i("slot",{key:"4d479d755a10caa143a222153c3250e7546adbe0"})))))}get el(){return s(this)}};d.style=a;export{d as swc_select};