import { Component, h, Prop } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-pie-chart'
  })
  export class SwcIconPieChart {
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
          <div class={className} style={style} innerHTML={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.13 384.13 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.13 448.13 0 0 1 448 68.48"/><path fill="currentColor" d="M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28M512 64V33.152A448 448 0 0 1 990.848 512H512z"/></svg>`}>
          </div>
      );
    }
  }
  