import { Component, h, Prop } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-coffee'
  })
  export class SwcIconCoffee {
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
      let className = 'swc-icon'

      if (this.classNames) {
        className += ' ' + this.classNames
      }

      if (this.spin) {
        className += ' ' + 'is-spin'
      }
      return (
          <div class={className} style={style} innerHTML={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M822.592 192h14.272a32 32 0 0 1 31.616 26.752l21.312 128A32 32 0 0 1 858.24 384h-49.344l-39.04 546.304A32 32 0 0 1 737.92 960H285.824a32 32 0 0 1-32-29.696L214.912 384H165.76a32 32 0 0 1-31.552-37.248l21.312-128A32 32 0 0 1 187.136 192h14.016l-6.72-93.696A32 32 0 0 1 226.368 64h571.008a32 32 0 0 1 31.936 34.304zm-64.128 0 4.544-64H260.736l4.544 64zm-548.16 128H820.48l-10.688-64H214.208l-10.688 64zm68.736 64 36.544 512H708.16l36.544-512z"/></svg>`}>
          </div>
      );
    }
  }
  