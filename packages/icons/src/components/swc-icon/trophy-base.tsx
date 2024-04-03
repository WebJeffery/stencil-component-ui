import { Component, h, Prop } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-trophy-base'
  })
  export class SwcIconTrophyBase {
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
          <div class={className} style={style} innerHTML={`<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1024 1024"><path fill="currentColor" d="M918.4 201.6c-6.4-6.4-12.8-9.6-22.4-9.6H768V96c0-9.6-3.2-16-9.6-22.4S745.6 64 736 64H288c-9.6 0-16 3.2-22.4 9.6S256 86.4 256 96v96H128c-9.6 0-16 3.2-22.4 9.6S96 217.6 96 224c3.2 108.8 25.6 185.6 64 224 34.4 34.4 77.56 55.65 127.65 61.99 10.91 20.44 24.78 39.25 41.95 56.41 40.86 40.86 91 65.47 150.4 71.9V768h-96c-9.6 0-16 3.2-22.4 9.6S352 790.4 352 800s3.2 16 9.6 22.4 12.8 9.6 22.4 9.6h256c9.6 0 16-3.2 22.4-9.6s9.6-12.8 9.6-22.4-3.2-16-9.6-22.4-12.8-9.6-22.4-9.6h-96V637.26c59.4-7.71 109.54-30.01 150.4-70.86 17.2-17.2 31.51-36.06 42.81-56.55 48.93-6.51 90.02-27.7 126.79-61.85 38.4-38.4 60.8-112 64-224 0-6.4-3.2-16-9.6-22.4M256 438.4c-19.2-6.4-35.2-19.2-51.2-35.2-22.4-22.4-35.2-70.4-41.6-147.2H256zm390.4 80C608 553.6 566.4 576 512 576s-99.2-19.2-134.4-57.6S320 438.4 320 384V128h384v256q0 81.6-57.6 134.4m172.8-115.2c-16 16-32 25.6-51.2 35.2V256h92.8c-6.4 76.8-19.2 124.8-41.6 147.2M768 896H256c-9.6 0-16 3.2-22.4 9.6S224 918.4 224 928s3.2 16 9.6 22.4 12.8 9.6 22.4 9.6h512c9.6 0 16-3.2 22.4-9.6s9.6-12.8 9.6-22.4-3.2-16-9.6-22.4-12.8-9.6-22.4-9.6"/></svg>`}>
          </div>
      );
    }
  }
  