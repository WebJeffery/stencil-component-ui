import { Component, Host, h, Element, Prop, Method, Event, EventEmitter } from '@stencil/core';
import { findElementsDownward } from '../../utils/utils';

@Component({
  tag: 'swc-checkbox-group',
  styleUrl: 'swc-checkbox-group.css',
  shadow: true,
})
export class SwcCheckboxGroup {
  @Element() el: HTMLElement;

  @Prop({
    attribute: 'disabled',
    mutable: true,
    reflect: true,
  })
  disabled: boolean = false;

  @Prop({
    attribute: 'value',
    mutable: true,
    reflect: true,
  })
  value: Array<string> = [];

  @Event({
    eventName: 'swcChange',
  })
  swcChange: EventEmitter<Array<string>>;
  customChangeHandler(val: Array<string>) {
    this.swcChange.emit(val);
  }

  render() {
    return (
      <Host disabled={this.disabled} value={this.value}>
        <slot></slot>
      </Host>
    );
  }

  componentWillLoad() {
    const checkboxList = findElementsDownward(this.el, 'ivy-checkbox');
    checkboxList.forEach((cur) => {
      const checked = (cur as any).checked;
      if (checked) {
        this.value.push(cur.getAttribute('value'));
      }
      if (this.disabled) {
        cur.setAttribute('disabled', '');
      }
    });
  }

  @Method()
  async setValue(item: string) {
    this.value.push(item);
    this.dispatchEventChange(this.value);
  }
  @Method()
  async removeValue(item: string) {
    const index = this.value.indexOf(item);
    if (index > -1) {
      this.value.splice(index, 1);
      this.dispatchEventChange(this.value);
    }
  }

  dispatchEventChange(val: Array<string>) {
    this.swcChange.emit(val);
  }
}
