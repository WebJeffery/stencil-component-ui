import{r as e,h as n,H as o}from"./theme.BibeGvl8.js";import"./framework.DIU08dKJ.js";const t=`:host {
  --ivy-link-font-size: var(--ivy-font-size, 14px);
  --ivy-link-font-weight: var(--ivy-font-weight-primary);
  --ivy-link-text-color: var(--ivy-text-color-regular);
  --ivy-link-hover-text-color: var(--ivy-color-primary);
  --ivy-link-disabled-text-color: var(--ivy-text-color-placeholder);
}
:host([type='primary']) {
  --ivy-link-text-color: var(--ivy-color-primary);
  --ivy-link-hover-text-color: var(--ivy-color-primary-light-3);
  --ivy-link-disabled-text-color: var(--ivy-color-primary-light-5);
}
:host([type='success']) {
  --ivy-link-text-color: var(--ivy-color-success);
  --ivy-link-hover-text-color: var(--ivy-color-success-light-3);
  --ivy-link-disabled-text-color: var(--ivy-color-success-light-5);
}
:host([type='warning']) {
  --ivy-link-text-color: var(--ivy-color-warning);
  --ivy-link-hover-text-color: var(--ivy-color-warning-light-3);
  --ivy-link-disabled-text-color: var(--ivy-color-warning-light-5);
}
:host([type='danger']) {
  --ivy-link-text-color: var(--ivy-color-danger);
  --ivy-link-hover-text-color: var(--ivy-color-danger-light-3);
  --ivy-link-disabled-text-color: var(--ivy-color-danger-light-5);
}
:host([type='info']) {
  --ivy-link-text-color: var(--ivy-color-info);
  --ivy-link-hover-text-color: var(--ivy-color-info-light-3);
  --ivy-link-disabled-text-color: var(--ivy-color-info-light-5);
}
.link {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: var(--ivy-link-font-size);
  font-weight: var(--ivy-link-font-weight);
  color: var(--ivy-link-text-color);
  &-inner {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  &.is-disabled {
    cursor: not-allowed;
    color: var(--ivy-link-disabled-text-color);
    pointer-events: none;
  }
  &.is-underline:not(.is-disabled) {
    &:hover {
      &::after {
        content: '';
        height: 1px;
        display: block;
        position: absolute;
        z-index: 1;
        bottom: 0;
        width: 100%;
        background-color: var(--ivy-link-text-color);
      }
    }
  }
}
`,r=t,l=class{constructor(i){e(this,i),this.type=void 0,this.href=void 0,this.underline=!1,this.disabled=!1,this.className=["link"]}render(){return this.disabled&&this.className.push("is-disabled"),this.underline&&this.className.push("is-underline"),n(o,{key:"10ca7412d8d8b848ec131a9e38fc5e658056487b",type:this.type},n("a",{key:"b9002db5b4c88b4a0ba7e8250b8da25ed4bb4395",href:this.href,class:this.className.join(" ")},n("span",{key:"482e4d3e59f457f753107cf76299f33198e92630",class:"text-inner"},n("slot",{key:"cdb323bda791f35981b34bf051b672cd1a36e224"}))))}};l.style=r;export{l as swc_link};
