import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-pie-chart'
  })
  export class SwcIconPieChart {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.13 384.13 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.13 448.13 0 0 1 448 68.48"/><path fill="currentColor" d="M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28M512 64V33.152A448 448 0 0 1 990.848 512H512z"/></svg></Host>;
    }
  }
  