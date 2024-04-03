import { readFileSync, readdir, writeFile } from 'node:fs';
import { optimize } from 'svgo';
import svgoPluginConf from './svgo-plugin-config.mjs';
import { join } from 'node:path';
import { URL, fileURLToPath } from 'node:url';

const format = svgFile =>
  optimize(svgFile, {
    plugins: svgoPluginConf,
  });
/**
 * 使用 svgo 的 optimize 方法格式化svg 字符串
 * @param {*} svgFile
 * @returns
 */
const transferSvg = svgFile => {
  return new Promise((resolve, reject) => {
    try {
      resolve(format(svgFile).data);
    } catch (e) {
      reject(e);
    }
  });
};

// 异步获取目录下的所有svg文件列表
const getSvgFiles = dir => {
  return new Promise((resolve, reject) => {
    readdir(dir, 'utf-8', (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
};

const camelCase = str => {
  const arr = str.split('-');
  return arr
    .map(c => {
      const firstChar = c.split('').shift();
      return c.replace(/^([a-zA-Z])(.+)/, `${firstChar.toUpperCase()}$2`);
    })
    .join('');
};

const renderCode = (name, ctx) => {
  const className = camelCase(name);
  return `import { Component, h, Prop } from '@stencil/core';
  
  @Component({
    tag: '${name}'
  })
  export class ${className} {
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
        style.transform = \`rotate(\$\{this.rotate\}deg)\`;
      }
      let className = 'swc-icon'

      if (this.classNames) {
        className += ' ' + this.classNames
      }

      if (this.spin) {
        className += ' ' + 'is-spin'
      }
      return (
          <div class={className} style={style} innerHTML={\`${ctx}\`}>
          </div>
      );
    }
  }
  `;
};

const renderCompFile = (entry, outDir) => {
  getSvgFiles(entry)
    .then(res => {
      return res.map(async c => {
        const svgFileContent = readFileSync(`${entry}/${c}`, 'utf-8');
        const svg = await transferSvg(svgFileContent);
        return {
          name: c.replace('.svg', ''),
          content: svg,
        };
      });
    })
    .then(async res => {
      let names = [];
      await Promise.allSettled(res).then(arr => {
        names = arr.map(c => {
          if (c.value) {
            const template = renderCode(`swc-icon-${c.value.name}`, c.value.content);
            writeFile(`${outDir}/components/swc-icon/${c.value.name}.tsx`, template, err => {
              if (err) {
                throw err;
              }
            });
          }

          // return {
          //   name: c.value?.name,
          //   className: camelCase(c.value?.name),
          //   compName: `swc-icon-${c.value?.name}`,
          // };
        });
      });
      return names;
    })
    // .then(res => {
    //   const importStr = res.map(c => `import ${c.className} from './components/swc-icon/${c.name}.js';`).join('\n');
    //   const compNameList = [...res.map(c => ({ compName: c.compName, className: [c.className].join('') }))];
    //   const install = `
    //   const components = import.meta.glob('./components/swc-icon/*.js', { import: 'default' })

    //   export {${compNameList.map(c => c.className).join(',')}}
    //   export const registerComponent = () => {
    //     if(window.__IMY__ICON__INSTALLED__) return;
    //     for (const path in components) {
    //       const name = path.replace('./components/swc-icon/', '').replace('.js', '');
    //       const component = components[path];
    //       component().then(module => {
    //         window.customElements.define(\`swc-icon-\${name}\`, module);
    //       });
    //     }
    //     window.__IMY__ICON__INSTALLED__ = true;
    //   }`;

    //   const indexFileContent = `${importStr}\n${install}`;
    //   writeFile(`${outDir}/index.js`, indexFileContent, err => {
    //     if (err) {
    //       throw err;
    //     }
    //   });
    // });
};

const __dirname = new URL('..', import.meta.url);
const root = fileURLToPath(__dirname);

const entryDir = join(root, 'svg');
const outputDir = join(root, 'src');

renderCompFile(entryDir, outputDir);
