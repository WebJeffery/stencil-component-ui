import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-present'
  })
  export class SwcIconPresent {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M480 896V640H192v-64h288V320H192v576zm64 0h288V320H544v256h288v64H544zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32z"/><path fill="currentColor" d="M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32"/><path fill="currentColor" d="M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256"/><path fill="currentColor" d="M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256"/></svg></Host>;
    }
  }
  