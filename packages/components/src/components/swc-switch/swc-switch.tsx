import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'swc-switch',
  styleUrl: 'swc-switch.css',
  shadow: true,
})
export class SwcSwitch {
  @Prop({
    attribute: 'checked',
    reflect: true,
    mutable: true,
  })
  checked: boolean = false;

  @Prop({
    attribute: 'disabled',
    reflect: true,
  })
  disabled: boolean = false;

  @Event({
    eventName: 'changed',
    bubbles: false,
    cancelable: true,
    composed: false,
  })
  changed: EventEmitter<boolean>;

  changeHandler() {
    this.checked = !this.checked;
    this.changed.emit(this.checked);
  }
  render() {
    return (
      <Host>
        <label class="ivy-switch">
          <input id="ivy-switch" type="checkbox" checked={this.checked} disabled={this.disabled} hidden onChange={this.changeHandler.bind(this)} />
        </label>
      </Host>
    );
  }
}
