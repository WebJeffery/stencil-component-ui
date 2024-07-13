import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-check'
  })
  export class SwcIconCheck {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"/></svg></Host>;
    }
  }
  