import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-dessert'
  })
  export class SwcIconDessert {
    render() {
      return <Host class="swc-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416m287.104-32.064h193.792a143.81 143.81 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.81 143.81 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0zm339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736M384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64"/></svg></Host>;
    }
  }
  