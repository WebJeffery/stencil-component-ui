# Web Component 图标库

为 [@swc-ui/components](https://github.com/WebJeffery/stencil-component-ui) Web Component 组件库封装的图标库


## 安装

选择一个你喜欢的包管理器安装

```bash
# NPM
$ npm install @swc-ui/icons

# Yarn
$ yarn add @swc-ui/icons

# pnpm
$ pnpm install @swc-ui/icons
```

## 注册使用

1、批量一次性引入所有图标注册

```js
// 全量引入
import { defineCustomElements} from '@swc-ui/icons/loader'
defineCustomElements()

```

2、按需引入图标注册【推荐】

```js
// 按需引入，自动注册
import '@swc-ui/icons/dist/components/swc-icon-add-location.js'
```

像普通 html 标签一样使用
```html
<swc-icon-add-location></swc-icon-add-location>
```

3、所有 icon 名称

```js
import { icons } from '@swc-ui/icons'
```

## 基础用法

通过设置 `name` 来使用其他图标

```html
<!-- 使用 swc-icon 为 SVG 图标提供属性 -->
<swc-icon name="edit" color="red"></swc-icon>

<!-- 或者独立使用它，不从父级获取属性 -->
<swc-icon-edit></swc-icon-edit>
```

## 倾斜 rotate

通过`rotate`倾斜 icon 角度

```html
<swc-icon name="edit" rotate="30"></swc-icon>
<swc-icon name="reading" rotate="60"></swc-icon>
```

## 旋转

添加`spin`属性来使 icon 旋转

```html
<swc-icon name="loading" spin></swc-icon>
<swc-icon name="refresh-right" spin></swc-icon>
<swc-icon name="refresh" spin></swc-icon>
```

## 大小

添加`size`属性来设置大小

```html
<swc-icon name="loading" size="16"></swc-icon>
<swc-icon name="loading"></swc-icon>
<swc-icon name="loading" size="24"></swc-icon>
<swc-icon name="loading" size="30"></swc-icon>
<swc-icon name="loading" size="36"></swc-icon>
```

## 颜色

添加`color`属性来设置颜色

```html
<swc-icon name="loading"></swc-icon>
<swc-icon name="loading" color="red"></swc-icon>
<swc-icon name="loading" color="blue"></swc-icon>
<swc-icon name="loading" color="pink"></swc-icon>
<swc-icon name="loading" color="green"></swc-icon>
```

## Attrs

| 属性名   | 说明   |类型| 可选值       | 默认值    |
|-------|------|-|-----------|--------|
| name  | 图标名称 |`string`| @swc-ui/icons 图标 | - |
| rotate  | 图标旋转角度 |`number`| 0 | - |
| spin  | 360度旋转 |`boolean`| `true`、`false` | `false` |
| size  | 图标大小 |`string`| 合法的 css 单位 | `1em` |
| color | 图标颜色 |`string`| 合法的颜色值    | -      |

