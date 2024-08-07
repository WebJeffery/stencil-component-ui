import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-plus'
  })
  export class SwcIconPlus {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"/></svg></Host>;
    }
  }
  