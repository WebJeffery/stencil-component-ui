import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-platform'
  })
  export class SwcIconPlatform {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M448 832v-64h128v64h192v64H256v-64zM128 704V128h768v576z"/></svg></Host>;
    }
  }
  