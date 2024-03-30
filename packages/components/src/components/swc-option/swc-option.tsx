import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'swc-option',
  styleUrl: 'swc-option.css',
  shadow: true,
})
export class SwcOption {
  @Prop({
    attribute: 'value',
    mutable: true,
    reflect: true,
  })
  value: string;
  @Prop()
  label: string;

  @Prop({
    attribute: 'disabled',
  })
  disabled: boolean = false;

  render() {
    return (
      <Host value={this.value} disabled={this.disabled}>
        <slot>{ this.label }</slot>
      </Host>
    );
  }
}
