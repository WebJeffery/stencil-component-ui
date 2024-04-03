import { Component, h, Prop } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-football'
  })
  export class SwcIconFootball {
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
          <div class={className} style={style} innerHTML={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896m0-64a384 384 0 1 0 0-768 384 384 0 0 0 0 768"/><path fill="currentColor" d="M186.816 268.288c16-16.384 31.616-31.744 46.976-46.08 17.472 30.656 39.808 58.112 65.984 81.28l-32.512 56.448a386 386 0 0 1-80.448-91.648m653.696-5.312a385.9 385.9 0 0 1-83.776 96.96l-32.512-56.384a322.9 322.9 0 0 0 68.48-85.76c15.552 14.08 31.488 29.12 47.808 45.184M465.984 445.248l11.136-63.104a323.6 323.6 0 0 0 69.76 0l11.136 63.104a388 388 0 0 1-92.032 0m-62.72-12.8A381.8 381.8 0 0 1 320 396.544l32-55.424a320 320 0 0 0 62.464 27.712l-11.2 63.488zm300.8-35.84a381.8 381.8 0 0 1-83.328 35.84l-11.2-63.552A320 320 0 0 0 672 341.184l32 55.424zm-520.768 364.8a385.9 385.9 0 0 1 83.968-97.28l32.512 56.32c-26.88 23.936-49.856 52.352-67.52 84.032-16-13.44-32.32-27.712-48.96-43.072m657.536.128a1443 1443 0 0 1-49.024 43.072 321.4 321.4 0 0 0-67.584-84.16l32.512-56.32c33.216 27.456 61.696 60.352 84.096 97.408M465.92 578.752a388 388 0 0 1 92.032 0l-11.136 63.104a323.6 323.6 0 0 0-69.76 0zm-62.72 12.8 11.2 63.552a320 320 0 0 0-62.464 27.712L320 627.392a381.8 381.8 0 0 1 83.264-35.84zm300.8 35.84-32 55.424a318.3 318.3 0 0 0-62.528-27.712l11.2-63.488c29.44 8.64 57.28 20.736 83.264 35.776z"/></svg>`}>
          </div>
      );
    }
  }
  