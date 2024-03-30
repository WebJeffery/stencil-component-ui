import { Component, Host, h, Prop, Event, EventEmitter, State, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'swc-input',
  styleUrl: 'swc-input.css'
})
export class SwcInput implements ComponentInterface {
  @State() isComposition = false;

  @Prop() disabled = false;
  @Prop() readonly = false;
  @Prop({
    attribute: 'auto-swcFocus',
  })
  autoFocus = false;
  @Prop({
    attribute: 'type',
  })
  type: string = 'text';
  @Prop() placeholder: string;
  @Prop({
    mutable: true,
  })
  value: string = '';

  @Event({
    eventName: 'swcChange',
  })
  swcChange: EventEmitter<string | number | boolean>;

  changeHandler(ev: any) {
    if (!this.isComposition) {
      this.value = ev.target.value;
      this.swcChange.emit(ev.target.value);
    }
  }
  compositionStartHandler() {
    this.isComposition = true;
  }
  compositionEndHandler(ev: any) {
    this.isComposition = false;
    this.value = ev.target.value;
    this.swcChange.emit(ev.target.value);
  }

  @Event({
    eventName: 'swcFocus',
  })
  swcFocus: EventEmitter<any>;
  focusHandler() {
    this.swcFocus.emit();
  }

  @Event({
    eventName: 'swcBlur',
  })
  swcBlur: EventEmitter<any>;
  blurHandler() {
    this.swcBlur.emit();
  }

  render() {
    return (
      <Host>
        <input
          class="ivy-input-inner"
          autoFocus={this.autoFocus}
          type={this.type}
          placeholder={this.placeholder}
          value={this.value}
          disabled={this.disabled}
          readonly={this.readonly}
          onInput={this.changeHandler.bind(this)}
          onCompositionstart={this.compositionStartHandler.bind(this)}
          onCompositionend={this.compositionEndHandler.bind(this)}
        />
      </Host>
    );
  }
}
