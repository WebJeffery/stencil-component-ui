import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-semi-select'
  })
  export class SwcIconSemiSelect {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64"/></svg></Host>;
    }
  }
  