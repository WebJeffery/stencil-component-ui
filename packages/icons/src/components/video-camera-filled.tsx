import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-video-camera-filled'
  })
  export class SwcIconVideoCameraFilled {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="m768 576 192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32zM192 768v64h384v-64zm192-480a160 160 0 0 1 320 0 160 160 0 0 1-320 0m64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288m-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320m64 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0"/></svg></Host>;
    }
  }
  