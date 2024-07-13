import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-top-left'
  })
  export class SwcIconTopLeft {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0z"/><path fill="currentColor" d="M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312z"/></svg></Host>;
    }
  }
  