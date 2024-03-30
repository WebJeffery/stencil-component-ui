import { Component, Host, h, Prop } from '@stencil/core';
import classNamse from 'classnames'
import { useNamespace } from '../../hooks/useNamespace';

const swcNs = useNamespace('button')

@Component({
  tag: 'swc-button',
  // styleUrls: ['swc-button.css']
})
export class SwcButton {
  @Prop({
    attribute: 'type',
    reflect: true,
  })
  type: string = 'default';

  @Prop({
    attribute: 'plain',
    reflect: true,
  })
  plain: boolean = false;

  @Prop({
    attribute: 'size',
    reflect: true,
  })
  size: string = '';

  @Prop({
    attribute: 'round',
    reflect: true,
  })
  round: boolean = false;

  @Prop({
    attribute: 'loading',
    reflect: true,
  })
  loading: boolean = false;

  @Prop({
    attribute: 'disabled',
    reflect: true,
  })
  disabled: boolean = false;
  
  @Prop({
    attribute: 'circle',
    reflect: true,
  })
  circle: boolean = false;

  @Prop({
    attribute: 'link',
    reflect: true,
  })
  link: boolean = false;

  @Prop({
    attribute: 'text',
    reflect: true,
  })
  text: boolean = false;

  @Prop({
    attribute: 'bg',
    reflect: true,
  })
  bg: boolean = false;

  render() {
    return (
      <Host
        type={this.type}
        loading={this.loading}
        round={this.round}
        plain={this.plain}
        class={classNamse(swcNs.b(),
          swcNs.m(this.type),
          swcNs.m(this.size),
          swcNs.is('disabled', this.disabled),
          swcNs.is('loading', this.loading),
          swcNs.is('plain', this.plain),
          swcNs.is('round', this.round),
          swcNs.is('circle', this.circle),
          swcNs.is('link', this.link),
          swcNs.is('text', this.text),
          swcNs.is('has-bg', this.bg))}
      >
        <slot name="icon">
          {/* <svg viewBox="0 0 1024 1024" class="ivy-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" aria-hidden="true" id="ivy-loading">
            <use href="#ivy-icon-loading"></use>
          </svg> */}
        </slot>
        <span class="ivy-button-inner">
          <slot />
        </span>
      </Host>
    );
  }
}
