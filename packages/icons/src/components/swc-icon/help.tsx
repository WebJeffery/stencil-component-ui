import { Component, h, Prop } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-help'
  })
  export class SwcIconHelp {
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
          <div class={className} style={style} innerHTML={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="m759.936 805.248-90.944-91.008A254.9 254.9 0 0 1 512 768a254.9 254.9 0 0 1-156.992-53.76l-90.944 91.008A382.46 382.46 0 0 0 512 896c94.528 0 181.12-34.176 247.936-90.752m45.312-45.312A382.46 382.46 0 0 0 896 512c0-94.528-34.176-181.12-90.752-247.936l-91.008 90.944C747.904 398.4 768 452.864 768 512s-20.096 113.6-53.76 156.992zm-45.312-541.184A382.46 382.46 0 0 0 512 128c-94.528 0-181.12 34.176-247.936 90.752l90.944 91.008A254.9 254.9 0 0 1 512 256c59.136 0 113.6 20.096 156.992 53.76zm-541.184 45.312A382.46 382.46 0 0 0 128 512c0 94.528 34.176 181.12 90.752 247.936l91.008-90.944A254.9 254.9 0 0 1 256 512c0-59.136 20.096-113.6 53.76-156.992zm417.28 394.496a194.6 194.6 0 0 0 22.528-22.528C686.912 602.56 704 559.232 704 512a191.23 191.23 0 0 0-67.968-146.56A191.3 191.3 0 0 0 512 320a191.23 191.23 0 0 0-146.56 67.968C337.088 421.44 320 464.768 320 512a191.23 191.23 0 0 0 67.968 146.56C421.44 686.912 464.768 704 512 704c47.296 0 90.56-17.088 124.032-45.44M512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896"/></svg>`}>
          </div>
      );
    }
  }
  