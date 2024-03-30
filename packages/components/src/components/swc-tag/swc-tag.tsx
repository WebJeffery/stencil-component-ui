import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'swc-tag',
  styleUrl: 'swc-tag.css',
  shadow: true,
})
export class SwcTag {
  @Prop({ attribute: 'type', reflect: true }) type: string = 'primary';
  @Prop({ attribute: 'size', reflect: true }) size: string = 'medium';
  @Prop({ attribute: 'theme', reflect: true }) theme: string;
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
