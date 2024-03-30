import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'swc-modal',
  styleUrl: 'swc-modal.css',
  shadow: true,
})
export class SwcModal {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
