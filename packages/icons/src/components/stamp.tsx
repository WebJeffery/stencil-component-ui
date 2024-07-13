import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-stamp'
  })
  export class SwcIconStamp {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0M128 896v-64h768v64z"/></svg></Host>;
    }
  }
  