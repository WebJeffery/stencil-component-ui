# 快速开始

## 通过包管理器使用

### 安装

```bash
npm i swc-ui
#OR
yarn add swc-ui
#OR
pnpm add swc-ui
```

### vue 中使用

```js
// vue2
import Vue from "vue";
import "swc-ui";
Vue.config.ignoredElements = [
  // 用一个 `RegExp` 忽略所有“ion-”开头的元素
  // 仅在 2.5+ 支持
  /^swc-/,
];

// vue3
import { createApp } from "vue";
createApp().config.compilerOptions.isCustomElement = (tag) =>
  tag.startsWith("swc-");
```

### react 中使用

```js
import "swc-ui";
//如需单独使用
import "swc-ui/dist/es/swc-button.js";
ReactDOM.render(<swc-button>button</swc-button>, document.body);
```
