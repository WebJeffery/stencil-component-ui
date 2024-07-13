import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-fold'
  })
  export class SwcIconFold {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M896 192H128v128h768zm0 256H384v128h512zm0 256H128v128h768zM320 384 128 512l192 128z"/></svg></Host>;
    }
  }
  