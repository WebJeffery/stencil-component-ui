# swc-ui

swc-ui （全称Stencil Web Component）， 是基于 [stencil.js](https://stenciljs.com/) 框架开发的符合 Web Components 规范的 UI 组件库，不受框架限制，运行在 JS/Vue/React/Angular 项目



## 链接

- [文档](https://github.com/WebJeffery/stencil-component-ui)


## 使用说明

### 安装

```bash
# npm
npm i @swc-ui/components -S
# yarn
yarn add @swc-ui/components -S
# pnpm
pnpm add @swc-ui/components
```

## 框架集成

### Vue

1、全局批量注册组件

```js
import { createApp } from 'vue'
import App from './App.vue';
import { applyPolyfills, defineCustomElements } from "@swc-ui/components/loader";
// 引入样式
import "@swc-ui/components/dist/swc-ui/swc-ui.css";

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});


createApp(App).mount('#app')
```

修改 `vite.config.js`，vue 编译兼容自定义元素
```js
import { defineConfig } from 'vite';

export default defineConfig({
  // Vue compiler options
  vue: {
    template: {
      compilerOptions: {
        // Ignore custom elements to avoid rendering errors
        isCustomElement: tag => tag.startsWith('swc-')
      },
    },
  },
});
```

## React

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// test-component is the name of our made up Web Component that we have
// published to npm:
import { applyPolyfills, defineCustomElements } from 'test-components/loader';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

applyPolyfills().then(() => {
  defineCustomElements();
});
```

### JavaScript

还未来得及处理 CDN，后续添加到 [jsdelivr](https://www.jsdelivr.com/)CDN，使用方法如下

```html
<html>
  <head>
    <script src="'https://cdn.jsdelivr.net/npm/swc-ui@0.0.1/dist/components/index.min.js'">
    </script>
  </head>
  <body>
    <swc-button>按钮</swc-button>
  </body>
</html>
```

## 开发指南

### 安装环境

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
npm run start
```

## 提交规范

使用 `git cz` 代替 `git commit`

```
feat - 新功能 feature
fix - 修复 bug
docs - 文档注释
style - 代码格式(不影响代码运行的变动)
refactor - 重构、优化(既不增加新功能，也不是修复bug)
perf - 性能优化
test - 增加测试
chore - 构建过程或辅助工具的变动
revert - 回退
build - 打包
```

## 完成组件

| 组件名称         | 搭配组件       | 组件描述                                               |
| ---------------- | ---------------- | ------------------------------------------------------ |
| button           | button-group                | 按钮组件                                               |
| icon           | -                | 图标组件                                               |
| aspect-ratio     | -                | 宽高保持固定比例的容器                                 |
| Badge            | -                | 徽章组件                                               |
| breadcrumb       | breadcrumb-item  | 面包屑导航组件                                         |
| breadcrumb-item  | -                | 面包屑导航子组件，不可单独使用                         |
| card             | -                | 卡片组件                                               |
| checkbox         | -                | 多选框                                                 |
| checkbox-group   | checkbox         | 多选框组                                               |
| col              | -                | row的子组件，不可单独使用                              |
| contextmenu      | contextmenu-item | 右键菜单组件                                           |
| contextmenu-item | -                | 右键菜单子组件，不可单独使用                           |
| collapse         | Collapse-item    | 折叠面板                                               |
| collapse-item    | -                | 折叠面板子组件，不可单独使用                           |
| dialog           | -                | 弹窗组件                                               |
| divider          | -                | 分割线，常用于分割内容                                 |
| drawer           | -                | 抽屉组件                                               |
| dropdown         | dropdown-item    | 下拉菜单组件                                           |
| dropdown-item    | -                | 下拉菜单子组件，不可单独使用                           |
| empty            | -                | 空组件，常用于内容为空的场合                           |
| grid             | grid-item        | 宫格组件-常用于九宫格                                  |
| image            | -                | 图片组件                                               |
| input            | -                | 输入组件                                               |
| Loading          | -                | 加载                                                   |
| message          | -                | 顶部弹层提示组件                                       |
| option           | -                | 下拉选择子组件，不可单独使用                           |
| process          | -                | 进度条组件                                             |
| radio            | -                | 单选框                                                 |
| radio-group      | radio            | 单选框组                                               |
| row              | col              | 行组件，子组件必须是col组件                            |
| select           | option           | 下拉选择组件                                           |
| switch           | -                | 开关组件                                               |
| step             | -                | 步骤条子组件，不可单独使用                             |
| steps            | step             | 步骤条组件                                             |
| tabs             | tab-pane         | tab组件                                                |
| tab-pane         | -                | tab子组件，不可单独使用                                |
| tag              | -                | 标签组件                                               |
| timeline         | timeline-item    | 时间线组件                                             |
| timeline-item    | -                | 时间线子组件，不可单独使用                             |
| tip              | -                | 直接显示在界面上提示组件，等同于elementPlus的alert组件 |
| tooltip          | -                | 提示组件                                               |
| Link             | -                | 链接                                                   |
| Text             | -                | 文字                                                   |

