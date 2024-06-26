import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'swc-divider',
  styleUrl: 'swc-divider.css',
  shadow: true,
})
export class SwcDivider {
  render() {
    return (
      <Host>
        <div class="ivy-divider-line"></div>
        <span class="ivy-divider-text">
          <slot></slot>
        </span>
      </Host>
    );
  }
}
