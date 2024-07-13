import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-reading-lamp'
  })
  export class SwcIconReadingLamp {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32m-44.672-768-99.52 448h608.384l-99.52-448zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z"/><path fill="currentColor" d="M672 576q32 0 32 32v128q0 32-32 32t-32-32V608q0-32 32-32m-192-.064h64V960h-64z"/></svg></Host>;
    }
  }
  