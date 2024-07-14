import { Component, Host, h } from '@stencil/core';
import classNamse from 'classnames';
import { useNamespace } from '../../hooks/useNamespace';

const swcNs = useNamespace('button-group');

@Component({
  tag: 'swc-button-group',
  styleUrl: 'swc-button-group.scss',
})
export class SwcButtonGroup {
  render() {
    return (
      <Host class={classNamse(swcNs.b())}>
        <slot></slot>
      </Host>
    );
  }
}
