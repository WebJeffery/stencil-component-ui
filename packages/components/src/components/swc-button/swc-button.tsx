import { Component, Host, h, Prop, Element } from '@stencil/core';
import classNamse from 'classnames';
import { useNamespace } from '../../hooks/useNamespace';

const swcNs = useNamespace('button');

@Component({
  tag: 'swc-button',
  styleUrl: 'swc-button.scss',
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

  @Prop({
    attribute: 'loadingIcon',
    reflect: false,
  })
  loadingIcon: string = 'loading';

  @Prop({
    attribute: 'icon',
    reflect: false,
  })
  icon: string = '';

  // Suffix Icon
  @Prop({
    attribute: 'suffixIcon',
    reflect: false,
  })
  suffixIcon: string = '';

  @Element() el: HTMLElement;

  render() {
    return (
      <Host
        class={classNamse(
          swcNs.b(),
          swcNs.m(this.type),
          swcNs.m(this.size),
          swcNs.is('disabled', this.disabled),
          swcNs.is('loading', this.loading),
          swcNs.is('plain', this.plain),
          swcNs.is('round', this.round),
          swcNs.is('circle', this.circle),
          swcNs.is('link', this.link),
          swcNs.is('text', this.text),
          swcNs.is('has-bg', this.bg),
        )}
      >
        <slot name="icon"></slot>
        {this.loading ? (
          <slot name="loading">
            <swc-icon name={this.loadingIcon} spin></swc-icon>
          </slot>
        ) : (
          this.icon && <swc-icon name={this.icon}></swc-icon>
        )}
        {this.el.textContent && (
          <span class="swc-button-inner">
            <slot />
          </span>
        )}
        {this.suffixIcon && <swc-icon name={this.suffixIcon}></swc-icon>}
      </Host>
    );
  }
}
