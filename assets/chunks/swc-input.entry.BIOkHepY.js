import{r as o,c as t,h as e,H as n}from"./theme.BlE6xyWi.js";import"./framework.DIU08dKJ.js";const s=":host{display:block;position:relative}.ivy-input-inner{background-color:#fff;background-image:none;border-radius:var(--ivy-border-radius, 4px);border:1px solid #dcdfe6;box-sizing:border-box;color:#606266;display:inline-block;font-size:inherit;height:34px;line-height:34px;outline:none;padding:0 15px;transition:border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);width:100%}.ivy-input-inner::input-placeholder{color:#c0c4cc;font-size:14px}.ivy-input-inner::-webkit-input-placeholder{color:#c0c4cc;font-size:14px}.ivy-input-inner::-moz-input-placeholder{color:#c0c4cc;font-size:14px}.ivy-input-inner:-moz-input-placeholder{color:#c0c4cc;font-size:14px}.ivy-input-inner:-ms-input-placeholder{color:#c0c4cc;font-size:14px}.ivy-input-inner:active,.ivy-input-inner:hover,.ivy-input-inner:focus{border-color:var(--ivy-color-primary, #409eff)}:host([disabled]){cursor:not-allowed}:host([disabled]) .ivy-input-inner{background-color:#f5f7fa;border-color:#e4e7ed;color:#c0c4cc;cursor:not-allowed}:host([readonly]){cursor:not-allowed}.ivy-input-icon{display:none;position:absolute;right:0;height:100%;width:30px;align-items:center;justify-content:center;pointer-events:none}.ivy-input .ivy-input-icon-prefix{left:0}",r=s,c=class{constructor(i){o(this,i),this.swcChange=t(this,"swcChange",7),this.swcFocus=t(this,"swcFocus",7),this.swcBlur=t(this,"swcBlur",7),this.isComposition=!1,this.disabled=!1,this.readonly=!1,this.autoFocus=!1,this.type="text",this.placeholder=void 0,this.value=""}changeHandler(i){this.isComposition||(this.value=i.target.value,this.swcChange.emit(i.target.value))}compositionStartHandler(){this.isComposition=!0}compositionEndHandler(i){this.isComposition=!1,this.value=i.target.value,this.swcChange.emit(i.target.value)}focusHandler(){this.swcFocus.emit()}blurHandler(){this.swcBlur.emit()}render(){return e(n,{key:"80c4b01f765528a523613323bb63aab350bde89d"},e("input",{key:"65ff5dbfedf1d98cd1de212921335ef956e0a0d0",class:"ivy-input-inner",autoFocus:this.autoFocus,type:this.type,placeholder:this.placeholder,value:this.value,disabled:this.disabled,readonly:this.readonly,onInput:this.changeHandler.bind(this),onCompositionstart:this.compositionStartHandler.bind(this),onCompositionend:this.compositionEndHandler.bind(this)}))}};c.style=r;export{c as swc_input};