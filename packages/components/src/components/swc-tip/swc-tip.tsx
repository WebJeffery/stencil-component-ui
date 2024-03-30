import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'swc-tip',
  styleUrl: 'swc-tip.css',
  shadow: true,
})
export class SwcTip {
  @Prop({
    attribute: 'name',
    mutable: true,
    reflect: true,
  })
  name: string;

  @Prop({
    attribute: 'type',
    reflect: true,
  })
  type: string = 'primary';

  render() {
    if (this.name) {
      return (
        <Host type={this.type}>
          <p class="title">{this.name}</p>
          <p class="content">
            <slot></slot>
          </p>
        </Host>
      );
    } else {
      return (
        <Host type={this.type}>
          <p class="content">
            <slot></slot>
          </p>
        </Host>
      );
    }
  }
}
