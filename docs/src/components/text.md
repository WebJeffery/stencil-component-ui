# Text 文字

文本的常见操作

## 基础用法

由 `type` 属性来选择 Text 的类型。

:::demo
```vue
<template>
    <swc-text>default</swc-text>
    <swc-text type="primary">primary</swc-text>
    <swc-text type="success">success</swc-text>
    <swc-text type="warning">warning</swc-text>
    <swc-text type="danger">danger</swc-text>
    <swc-text type="info">info</swc-text>
</template>
```
:::

## 省略

通过 `truncated` 属性，在文本超过视图或最大宽度设置时展示省略符。 通过 `line-clamp` 属性控制多行的样式

:::demo
```vue
<template>
    <swc-text truncated style="width: 200px">
        这里是测试超出宽度显示省略号功能的
    </swc-text>
    <swc-text truncated line-clamp="2">
        这个功能是使用 CSS 属性 -webkit-line-clamp<br />
        来设置显示行数的，超出<br />
        的内容将不显示。
    </swc-text>
</template>
```
:::

## 自定义颜色和字体大小

通过自定义 css 属性 来更改 Text 组件的字体颜色和大小

:::demo
```vue
<template>
    <swc-text>默认</swc-text>
    <swc-text style="--swc-text-color: darkblue;">自定义颜色</swc-text>
    <swc-text style="--swc-text-color: darkblue; --swc-text-font-size: 20px;">
        自定义颜色和字体大小
    </swc-text>
</template>
```
:::

## 可用的 CSS 变量

通过暴露的 CSS 变量可以修改其组件的部分样式

::: details 点击代开

```css
:host {
  --swc-text-color: var(--swc-text-color-regular, #606266);
  --swc-text-font-size: var(--swc-font-size, 14px);
}
```

:::

## Props

| 属性名     | 说明           | 类型      | 可选值                                | 默认值 |
| ---------- | -------------- | --------- | ------------------------------------- | ------ |
| type       | 类型           | `string`  | `primary/success/warning/danger/info` | -      |
| truncated  | 超出显示省略号 | `boolean` | -                                     | -      |
| line-clamp | 行数           | `number`  | -                                     | -      |
