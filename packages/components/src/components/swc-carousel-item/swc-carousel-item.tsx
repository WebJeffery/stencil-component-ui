import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'swc-carousel-item',
  styleUrl: 'swc-carousel-item.css',
  shadow: true,
})
export class SwcCarouselItem {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
