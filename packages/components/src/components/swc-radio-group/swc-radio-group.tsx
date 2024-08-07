import { Component, Host, h, Prop, Element, Event, EventEmitter, Method } from '@stencil/core';
import { findElementsDownward } from '../../utils/utils';

@Component({
  tag: 'swc-radio-group',
  styleUrl: 'swc-radio-group.css',
  shadow: true,
})
export class SwcRadioGroup {
  @Element() el: HTMLElement;
  @Prop({
    attribute: 'value',
    reflect: true,
    mutable: true,
  })
  value: string;

  @Prop() disabled: boolean = false;

  @Event({
    eventName: 'changed',
  })
  changed: EventEmitter<string>;
  customChangeHandler(val: string) {
    this.changed.emit(val);
  }

  render() {
    return (
      <Host disabled={this.disabled}>
        <slot></slot>
      </Host>
    );
  }

  componentDidLoad() {
    const checkboxList = findElementsDownward(this.el, 'ivy-radio');
    checkboxList.forEach((cur) => {
      const checked = cur.getAttribute('checked');
      if (checked) {
        this.value = cur.getAttribute('value');
      }
      if (this.disabled) {
        cur.setAttribute('disabled', '');
      }
    });
  }

  @Method()
  async dispatchEventChange(val: string) {
    this.changed.emit(val);
  }
}
