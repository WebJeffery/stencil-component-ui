import { Component, h, Prop } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-left'
  })
  export class SwcIconLeft {
    /**
     * icon 尺寸 默认 20
     */
    @Prop() size: string = '20px';
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
      const className = this.classNames ? 'swc-icon' + ' ' + this.classNames : 'swc-icon'
      return (
          <div class={className} style={style} innerHTML={`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48"><path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="currentColor" d="M31 36 19 24l12-12" data-follow-stroke="#9b9b9b"/></svg>`}>
          </div>
      );
    }
  }
  