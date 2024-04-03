import{r as e,h as n,H as o}from"./theme.CN6nmgZd.js";import"./framework.DIU08dKJ.js";const t=`:host {
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
`,r=t,l=class{constructor(i){e(this,i),this.type=void 0,this.href=void 0,this.underline=!1,this.disabled=!1,this.className=["link"]}render(){return this.disabled&&this.className.push("is-disabled"),this.underline&&this.className.push("is-underline"),n(o,{key:"e497a679af79979e9ef83fdbd881cfbd8740dd20",type:this.type},n("a",{key:"70a20c212f825d814201e6c981c732cf6f9202d8",href:this.href,class:this.className.join(" ")},n("span",{key:"53f1d0306c64538b40c2ce3219c8fc077e2c1d93",class:"text-inner"},n("slot",{key:"5a78c0eece696c15be6b4f16c24752b608f674ae"}))))}};l.style=r;export{l as swc_link};
