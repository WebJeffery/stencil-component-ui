import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-video-camera'
  })
  export class SwcIconVideoCamera {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M704 768V256H128v512zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32zm0 71.552v176.896l128 64V359.552zM192 320h192v64H192z"/></svg></Host>;
    }
  }
  