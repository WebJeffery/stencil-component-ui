# Tag 标签

## 常规用法

默认显示的样式

:::demo
```vue
<template>
  <swc-tag>default</swc-tag>
  <swc-tag type="primary">primary</swc-tag>
  <swc-tag type="success">success</swc-tag>
  <swc-tag type="warning">warning</swc-tag>
  <swc-tag type="danger">danger</swc-tag>
  <swc-tag type="info">info</swc-tag>
</template>
```
:::


## 自定义颜色

通过`type`属性来设置主题,默认颜色有 5 中-`primary`、`success`、`warning`、`error`、`info`

:::demo
```vue
<template>
  <swc-tag type="#008000">#008000</swc-tag>
  <swc-tag type="#67C23A">#67C23A</swc-tag>
  <swc-tag type="#E6A23C">#E6A23C</swc-tag>
  <swc-tag type="#F56C6C">#F56C6C</swc-tag>
  <swc-tag type="#909399">#909399</swc-tag>
</template>
```
:::

## theme

通过`theme`属性来设置主题,一共有三种`plain`、`dark`、`default`,其中`default`是默认的不用写

:::demo
```vue
<template>
  default：
  <swc-tag type="primary">primary</swc-tag>
  <swc-tag type="success">success</swc-tag>
  <swc-tag type="warning">warning</swc-tag>
  <swc-tag type="danger">#F56C6C</swc-tag>
  <swc-tag type="info">info</swc-tag>

  dark：
  <swc-tag theme="dark" type="primary">primary</swc-tag>
  <swc-tag theme="dark" type="success">success</swc-tag>
  <swc-tag theme="dark" type="warning">warning</swc-tag>
  <swc-tag theme="dark" type="danger">danger</swc-tag>
  <swc-tag theme="dark" type="info">info</swc-tag>
</template>
```
:::

## Size 大小

通过`size`属性来设置主题,一共有四种`mini`、`small`、`medium`、`default`,其中`default`是默认的不用写
:::demo
```vue
<template>
  <swc-tag>default</swc-tag>
  <swc-tag size="medium">medium</swc-tag>
  <swc-tag size="small">small</swc-tag>
  <swc-tag size="mini">mini</swc-tag>
</template>
```
:::
