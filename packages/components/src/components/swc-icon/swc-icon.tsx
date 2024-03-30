import { Component, Host, h, getAssetPath, Prop } from '@stencil/core';

@Component({
  tag: 'swc-icon',
  styleUrl: 'swc-icon.css',
  assetsDirs: ['assets'],
  shadow: true,
})
export class SwcIcon {
  @Prop() name: string;
  render() {
    const base = getAssetPath('./assets/iconfont.svg');
    return (
      <Host>
        <svg class="icon">
          <use xlinkHref={`${base}#icon-${this.name}`} />
        </svg>
      </Host>
    );
  }
}
