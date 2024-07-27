import { readFileSync, readdir, writeFile } from 'node:fs';
import { optimize } from 'svgo';
import { join } from 'node:path';
import { URL, fileURLToPath } from 'node:url';

const format = svgFile => {
  return optimize(svgFile, {
    plugins: [
      {
        name: 'convertColors',
        params: { currentColor: /^(?!url|none)./ },
      },
      {
        name: 'cleanupListOfValues',
        active: true,
      },
      {
        name: 'removeStyleElement',
        active: true,
      },
      {
        name: 'removeViewBox',
        active: false,
      },
      {
        name: 'removeDimensions',
        active: true,
      },
    ],
  });
}
  
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
  return `import { Component, Host, h } from '@stencil/core';
  
  @Component({
    tag: '${name}'
  })
  export class ${className} {
    render() {
      return <Host class="swc-svg">${ctx}</Host>;
    }
  }
  `;
};

// 所有 icon 标签
export const swcIconTemplate = (entry, outDir) => {
  getSvgFiles(entry)
    .then(res => {
      const icon = res.map(val => {
        let str = val.replace('.svg', '')
        return `<swc-icon-${str} style="margin-right: 10px;"></swc-icon-${str}>\n`
      }).join('')

      writeFile(`${outDir}/swc-icon.md`, icon, err => {
        if (err) {
          throw err;
        }
      });
    })
}

/**
 * 编译 svg 图标为 class 组件
 * @param {*} entry 解析入口目录
 * @param {*} outDir 输出目录
 */
const renderCompFile = (entry, outDir) => {
  let componentsList = []
  getSvgFiles(entry)
    .then(res => {
      return res.map(async c => {
        const svgFileContent = readFileSync(`${entry}/${c}`, 'utf-8');
        const svg = await transferSvg(svgFileContent);
        const name = c.replace('.svg', '')
        componentsList.push(name)
        return {
          name: name,
          content: svg,
        };
      });
    })
    .then(async res => {
      await Promise.allSettled(res).then(arr => {
        arr.forEach(c => {
          if (c.value) {
            const template = renderCode(`swc-icon-${c.value.name}`, c.value.content);
            writeFile(`${outDir}/components/${c.value.name}.tsx`, template, err => {
              if (err) {
                throw err;
              }
            });
          }
        })
        // 入口文件组件
        writeFile(`${outDir}/index.ts`, `export const icons = [${componentsList.map(c => `\n'${c}'`)}\n];\nexport default icons;`, err => {
          if (err) {
            throw err;
          }
        });
      })
    })
}

const __dirname = new URL('..', import.meta.url);
const root = fileURLToPath(__dirname);

const entryDir = join(root, 'svg');
const outputDir = join(root, 'src');

renderCompFile(entryDir, outputDir)

