import { Component, h, Prop } from '@stencil/core';
  
  @Component({
    tag: 'swc-icon-basketball'
  })
  export class SwcIconBasketball {
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
          <div class={className} style={style} innerHTML={`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M778.752 788.224a382.46 382.46 0 0 0 116.032-245.632 256.51 256.51 0 0 0-241.728-13.952 762.9 762.9 0 0 1 125.696 259.584m-55.04 44.224a699.65 699.65 0 0 0-125.056-269.632 256.13 256.13 0 0 0-56.064 331.968 382.7 382.7 0 0 0 181.12-62.336m-254.08 61.248A320.13 320.13 0 0 1 557.76 513.6a716 716 0 0 0-48.192-48.128 320.13 320.13 0 0 1-379.264 88.384 382.4 382.4 0 0 0 110.144 229.696 382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.13 256.13 0 0 0 331.072-56.448 699.65 699.65 0 0 0-268.8-124.352 382.66 382.66 0 0 0-62.272 180.8m106.56-235.84a762.9 762.9 0 0 1 258.688 125.056 256.51 256.51 0 0 0-13.44-241.088A382.46 382.46 0 0 0 235.84 245.248m318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a780 780 0 0 1 66.176 66.112 320.83 320.83 0 0 1 282.112-8.128 382.4 382.4 0 0 0-110.144-229.12 382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6 448 448 0 0 1 633.6 633.6"/></svg>`}>
          </div>
      );
    }
  }
  