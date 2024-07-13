import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-moon-night'
  })
  export class SwcIconMoonNight {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.3 448.3 0 0 1 384 512M171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z"/><path fill="currentColor" d="M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32m128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m160 127.68 224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z"/></svg></Host>;
    }
  }
  