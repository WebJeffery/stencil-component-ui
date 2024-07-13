import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-checked'
  })
  export class SwcIconChecked {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M704 192h160v736H160V192h160.064v64H704zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024zM384 192V96h256v96z"/></svg></Host>;
    }
  }
  