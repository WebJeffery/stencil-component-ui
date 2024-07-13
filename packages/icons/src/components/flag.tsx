import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-flag'
  })
  export class SwcIconFlag {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M288 128h608L736 384l160 256H288v320h-96V64h96z"/></svg></Host>;
    }
  }
  