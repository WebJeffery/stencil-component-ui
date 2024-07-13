import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-d-caret'
  })
  export class SwcIcondCaret {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="m512 128 288 320H224zM224 576h576L512 896z"/></svg></Host>;
    }
  }
  