import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'swc-row',
  styleUrl: 'swc-row.css',
  shadow: true,
})
export class SwcRow {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
