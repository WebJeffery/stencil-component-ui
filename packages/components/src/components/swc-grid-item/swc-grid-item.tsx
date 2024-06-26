import { Component, Host, h, State, Prop, Watch, Element } from '@stencil/core';

@Component({
  tag: 'swc-grid-item',
  styleUrl: 'swc-grid-item.css',
  shadow: true,
})
export class SwcGridItem {
  @Element() $el: HTMLElement;

  @State() _col: number = 3;

  @Prop() col: string = '3';

  @Watch('col')
  watchColHandler(val: string) {
    const tmp = parseInt(val);
    if (tmp !== this._col) {
      throw new Error(`type attr is must be string number`);
    }
    this._col = tmp;
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
