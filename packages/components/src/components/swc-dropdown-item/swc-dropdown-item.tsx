import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'swc-dropdown-item',
  styleUrl: 'swc-dropdown-item.css',
  shadow: true,
})
export class SwcDropdownItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
