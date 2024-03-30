# Loading 加载

加载数据时显示动效。

## 基础用法

<swc-loading style="min-height: 20vh" loading>
    Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<swc-divider value="默认位置-中间"></swc-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<swc-divider placement="left" value="左侧"></swc-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<swc-divider placement="right" value="右侧"></swc-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
</swc-loading>

```html
<swc-loading style="min-height: 20vh" loading>
    Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<swc-divider value="默认位置-中间"></swc-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<swc-divider placement="left" value="左侧"></swc-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<swc-divider placement="right" value="右侧"></swc-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
</swc-loading>
```


## 增加文字描述

通过 `text` 属性可以设置文字描述。

<swc-loading style="min-height: 20vh" loading text="加载中请稍候">
    Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<swc-divider value="默认位置-中间"></swc-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<swc-divider placement="left" value="左侧"></swc-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<swc-divider placement="right" value="右侧"></swc-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
</swc-loading>

```html
<swc-loading style="min-height: 20vh" loading text="加载中请稍候">
    Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<swc-divider value="默认位置-中间"></swc-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<swc-divider placement="left" value="左侧"></swc-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<swc-divider placement="right" value="右侧"></swc-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
</swc-loading>
```

## 自定义图标

<swc-loading style="min-height: 20vh" loading text="加载中请稍候">
    <img src="/images/icon-1.svg" slot="icon" />
    Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<swc-divider value="默认位置-中间"></swc-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<swc-divider placement="left" value="左侧"></swc-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<swc-divider placement="right" value="右侧"></swc-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
</swc-loading>

```html
<swc-loading style="min-height: 20vh" loading text="加载中请稍候">
  <img src="/images/icon-1.svg" slot="icon" />
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
  Inc.
  <swc-divider value="默认位置-中间"></swc-divider>
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
  Inc.
  <swc-divider placement="left" value="左侧"></swc-divider>
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
  Inc.
  <swc-divider placement="right" value="右侧"></swc-divider>
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
  Inc.
</swc-loading>
```

## 通过 js 控制 loading 的加载

<swc-button @click="startLoading">开启 loading</swc-button>
<swc-button @click="endLoading">关闭 loading</swc-button>
<br>
<br>
<swc-loading style="min-height: 20vh" text="加载中请稍候" id="test">
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<swc-divider value="默认位置-中间"></swc-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<swc-divider placement="left" value="左侧"></swc-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
<swc-divider placement="right" value="右侧"></swc-divider>
Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
Inc.
</swc-loading>

```vue
<template>
    <swc-button @click="startLoading">开启 loading</swc-button>
    <swc-button @click="endLoading">关闭 loading</swc-button>
    
    <swc-loading style="min-height: 20vh" text="加载中请稍候" id="test">
        Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
    Inc.
    <swc-divider value="默认位置-中间"></swc-divider>
    Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
    Inc.
    <swc-divider placement="left" value="左侧"></swc-divider>
    Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
    Inc.
    <swc-divider placement="right" value="右侧"></swc-divider>
    Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple
    Inc.
    </swc-loading>
</template>
<script setup>
const startLoading = () => {
    document.querySelector('#test').loading = true
}
const endLoading = () => {
    document.querySelector('#test').loading = false
}
</script>
```

## 可用的 CSS 变量

:::details 点击查看
```css
:host {
    --swc-loading-mask-color: rgba(255, 255, 255, 0.85);
    --swc-loading-text-color: var(--swc-text-color-regular, #606266);
    --swc-loading-text-margin-top: 12px;
    --swc-loading-text-font-size: 13px;
}
```
:::

## Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| loading | 是否显示 loading | boolean | - | false |
| text | loading 时的文本 | string | - | - |

## Slots

| name    | 说明             |
|---------|----------------|
| icon    | 自定义 loading 图标 |
| default | 内容区域           |

<script setup>
const startLoading = () => {
    document.querySelector('#test').loading = true
}
const endLoading = () => {
    document.querySelector('#test').loading = false
}
</script>