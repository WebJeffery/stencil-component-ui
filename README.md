# swc-ui

Stencil Web Component，简称（SWC UI）使用 [stencil.js](https://stenciljs.com/) 框架开发的符合 Web Components 规范的 UI 组件库，可以使用在 Vue/React/Angular 项目，也能运行在纯 JS 项目

## 链接

- [文档](https://github.com/WebJeffery/stencil-component-ui)


## 使用说明

### 安装

```bash
# npm
npm i swc-ui -S
# yarn
yarn add swc-ui -S
# pnpm
pnpm add swc-ui
```

### 使用

引入样式
```js
import 'swc-ui/dist/swc-ui/swc-ui.css'
```

全局注册组件
```js
import { defineCustomElements } from "swc-ui/loader";

defineCustomElements()
```


## 开发步骤

1、克隆源码

```
git clone https://github.com/WebJeffery/stencil-component-ui.git
```

2、安装依赖

```shell
pnpm install
```

3、启动项目

```shell
npm run dev
``
