# 快速开始

## 安装

```bash
# npm
npm i @swc-ui/components

# yarn
yarn add @swc-ui/components

# pnpm
pnpm add @swc-ui/components
```

## vue2 使用

```js
// vue2
import Vue from "vue";
import "@swc-ui/components";
Vue.config.ignoredElements = [
  // 用一个 `RegExp` 忽略所有“ion-”开头的元素
  // 仅在 2.5+ 支持
  /^swc-/,
];

```

## vue 3 使用

```js
import { createApp } from "vue";
createApp().config.compilerOptions.isCustomElement = (tag) =>
  tag.startsWith("swc-");
```

## react 使用

```js
import "@swc-ui/components";
//如需单独使用
import "@swc-ui/components/dist/components/swc-button.js";
ReactDOM.render(<swc-button>button</swc-button>, document.body);
```
