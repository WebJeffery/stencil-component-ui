import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'swc-contextmenu-item',
  styleUrl: 'swc-contextmenu-item.css',
  shadow: true,
})
export class SwcContextmenuItem {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
