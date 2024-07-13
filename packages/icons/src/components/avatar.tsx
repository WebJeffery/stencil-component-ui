import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-avatar'
  })
  export class SwcIconAvatar {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M628.736 528.896A416 416 0 0 1 928 928H96a415.87 415.87 0 0 1 299.264-399.104L512 704zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0"/></svg></Host>;
    }
  }
  