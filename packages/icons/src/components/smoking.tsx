import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-smoking'
  })
  export class SwcIconSmoking {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M256 576v128h640V576zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32"/><path fill="currentColor" d="M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"/></svg></Host>;
    }
  }
  