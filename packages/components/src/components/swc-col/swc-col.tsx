import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'swc-col',
  styleUrl: 'swc-col.css',
  shadow: true,
})
export class SwcCol {
  @Prop({
    reflect: true,
  })
  span: string = '24';

  render() {
    return (
      <Host style={{ flex: `0 0 ${(parseInt(this.span) / 24) * 100}%` }}>
        <slot></slot>
      </Host>
    );
  }
}
