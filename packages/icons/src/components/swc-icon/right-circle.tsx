import { Component, h, Prop } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-right-circle'
  })
  export class SwcIconRightCircle {
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
          <div class={className} style={style} innerHTML={`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48"><path stroke-linejoin="round" stroke-width="3" stroke="currentColor" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z" data-follow-stroke="#9b9b9b"/><path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="currentColor" d="m21 33 9-9-9-9" data-follow-stroke="#9b9b9b"/></svg>`}>
          </div>
      );
    }
  }
  