import { Component, Host, h, Prop } from '@stencil/core';
import classNameFun from 'classnames';
import { useNamespace } from '../../hooks/useNamespace';

const swcNs = useNamespace('icon')

  @Component({
    tag: 'swc-icon',
    styleUrl: 'swc-icon.scss'
  })
  export class SwcIcon {
    /**
     * 字体图标名称
     */
    @Prop() name: string;
    /**
     * icon 尺寸 默认 20
     */
    @Prop() size: string;
    /**
     * color 颜色
     */
    @Prop() color: string;
    /**
     * styles 传入的css样式
     */
    @Prop() styles: object;
    /**
     * 传入的class名称
     */
    @Prop() classNames: string = '';
    /**
     * 旋转的角度
     */
    @Prop() rotate: number;
    /**
     * 是否自动旋转
     */
    @Prop() spin: boolean;


    render() {
      const style = Object.assign({
        color: this.color
      }, this.styles || {}) as Record<string, string>

      if (this.size) {
        const value = !Number.isNaN(Number(this.size)) ? this.size + 'px' : this.size
        style.width = value
        style.height = value
      }

      if (this.rotate && Number.isSafeInteger(this.rotate)) {
        style.transform = `rotate(${this.rotate}deg)`;
      }
      const IconName = (this.name ? `swc-icon-${this.name}` : 'slot')

      return (
          <Host class={classNameFun(swcNs.b(), this.classNames, swcNs.is('spin', this.spin))} style={style}>
            <IconName></IconName>
          </Host>
      );
    }
  }
