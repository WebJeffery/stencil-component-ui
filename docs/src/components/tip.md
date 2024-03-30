# Tip 提示

## 常规用法

没有任何参数

:::demo
```vue
<template>
  <swc-tip>默认消息提示的文案</swc-tip>
</template>
```
:::

## Title

通过 设置 `title` 属性来设置标题

:::demo
```vue
<template>
  <swc-tip type="info" title="提示">主要消息提示的文案</swc-tip>
</template>
```
:::

## Line

通过 设置 `line` 属性在左侧添加一条竖线

:::demo
```vue
<template>
  <swc-tip line>默认消息提示的文案</swc-tip>
  <swc-tip line type="info">主要消息提示的文案</swc-tip>
  <swc-tip line type="success">成功消息提示的文案</swc-tip>
  <swc-tip line type="warning">警告消息提示的文案</swc-tip>
  <swc-tip line type="error">错误消息提示的文案</swc-tip>
</template>
```
:::

## Type

通过 设置 `type` 属性来改变颜色
:::demo
```vue
<template>
  <swc-tip type="info">主要消息提示的文案</swc-tip>
  <swc-tip type="success">成功消息提示的文案</swc-tip>
  <swc-tip type="warning">警告消息提示的文案</swc-tip>
  <swc-tip type="error">错误消息提示的文案</swc-tip>
</template>
```
:::

## 支持的`CSS`变量

可以通过更改一下属性来自定义`tip`组件的样式

```css
--swc-tip-border-radius  /**圆角 */
--icy-tip-line-width  /**左侧竖线的宽度 */
--swc-tip-title-font-size  /**标题的字体大小 */
--swc-tip-font-size  /**字体大小 */
/**下面的仅在没有设置type属性时可用 */
--swc-tip-bg-color  /**背景颜色 */
--swc-tip-color  /**字体颜色 */
--swc-tip-line-color  /**左侧竖线颜色 */
```
