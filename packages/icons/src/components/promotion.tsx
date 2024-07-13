import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-promotion'
  })
  export class SwcIconPromotion {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472zm256 512V657.024L512 768z"/></svg></Host>;
    }
  }
  