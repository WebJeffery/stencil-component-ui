# Progress 进度条

## 常规用法

通过设置`value`属性的值来设置进度

:::demo
```vue
<template>
  <swc-progress value="70"></swc-progress>
</template>
```
:::

## 设置进度条的颜色

通过设置`color`属性的值来设置进度条的颜色

:::demo
```vue
<template>
  <swc-progress value="70"></swc-progress>
  <swc-progress value="70" color="red"></swc-progress>
</template>
```
:::

## 设置进度条的粗细

通过设置`size`属性的值来设置进度条的大小-默认:`10`单位：px

:::demo
```vue
<template>
  <swc-progress value="70"></swc-progress>
  <swc-progress value="70" size="15"></swc-progress>
</template>
```
:::
