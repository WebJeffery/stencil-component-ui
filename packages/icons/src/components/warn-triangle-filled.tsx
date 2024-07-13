import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-warn-triangle-filled'
  })
  export class SwcIconWarnTriangleFilled {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 1024 1024"><path fill="currentColor" d="M928.99 755.83 574.6 203.25c-12.89-20.16-36.76-32.58-62.6-32.58s-49.71 12.43-62.6 32.58L95.01 755.83c-12.91 20.12-12.9 44.91.01 65.03 12.92 20.12 36.78 32.51 62.59 32.49h708.78c25.82.01 49.68-12.37 62.59-32.49s12.92-44.91.01-65.03M554.67 768h-85.33v-85.33h85.33zm0-426.67v298.66h-85.33V341.32z"/></svg></Host>;
    }
  }
  