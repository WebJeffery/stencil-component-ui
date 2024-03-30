import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'swc-link',
  styleUrl: 'swc-link.css',
  shadow: true,
})
export class SwcLink {
  @Prop()
  type: string;

  @Prop()
  href: string

  @Prop()
  underline:boolean = false

  @Prop()
  disabled: boolean = false

  @State()
  className = ['link']
  render() {
    if(this.disabled){
      this.className.push('is-disabled')
    }
    if(this.underline){
      this.className.push('is-underline')
    }
    return (
      <Host type={this.type}>
        <a
          href={this.href}
          class={this.className.join(' ')}
          >
          <span class="text-inner">
              <slot></slot>
          </span>
        </a>
      </Host>
    );
  }

}
