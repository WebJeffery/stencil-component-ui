import { Component, h, Prop } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-chrome-filled'
  })
  export class SwcIconChromeFilled {
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
          <div class={className} style={style} innerHTML={`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1024 1024"><path fill="currentColor" d="M938.67 512.01c0-44.59-6.82-87.6-19.54-128H682.67a212.37 212.37 0 0 1 42.67 128c.06 38.71-10.45 76.7-30.42 109.87l-182.91 316.8c235.65-.01 426.66-191.02 426.66-426.67"/><path fill="currentColor" d="M576.79 401.63a127.9 127.9 0 0 0-63.56-17.6c-22.36-.22-44.39 5.43-63.89 16.38s-35.79 26.82-47.25 46.02a128 128 0 0 0-2.16 127.44l1.24 2.13a127.9 127.9 0 0 0 46.36 46.61 127.9 127.9 0 0 0 63.38 17.44c22.29.2 44.24-5.43 63.68-16.33a127.94 127.94 0 0 0 47.16-45.79v-.01l1.11-1.92a127.98 127.98 0 0 0 .29-127.46 127.96 127.96 0 0 0-46.36-46.91"/><path fill="currentColor" d="M394.45 333.96A213.34 213.34 0 0 1 512 298.67h369.58A426.5 426.5 0 0 0 512 85.34a425.6 425.6 0 0 0-171.74 35.98 425.6 425.6 0 0 0-142.62 102.22l118.14 204.63a213.4 213.4 0 0 1 78.67-94.21m117.56 604.72H512zm-97.25-236.73a213.3 213.3 0 0 1-89.54-86.81L142.48 298.6c-36.35 62.81-57.13 135.68-57.13 213.42 0 203.81 142.93 374.22 333.95 416.55h.04l118.19-204.71a213.3 213.3 0 0 1-122.77-21.91"/></svg>`}>
          </div>
      );
    }
  }
  