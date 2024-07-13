import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-wallet-filled'
  })
  export class SwcIconWalletFilled {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96m-80-544 128 160H384z"/></svg></Host>;
    }
  }
  