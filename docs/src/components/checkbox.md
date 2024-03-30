# Checkbox 多选框

一组备选项中进行多选

## 基础用法

:::demo
```vue
<template>
    <swc-checkbox>苹果</swc-checkbox>
</template>
```
:::

## 自定义选中和没有选中的值

> 通过 `true-label` 和 `false-label` 来设置选中和没有选中的值，通常适用于单个选择框的情况

:::demo
```vue
<template>
    <swc-checkbox true-label="1" false-label="0">勾选即同意本协议</swc-checkbox>
</template>
```
:::

## 禁用效果

:::demo
```vue
<template>
    <swc-checkbox disabled>苹果</swc-checkbox>
</template>
```
:::

## 配合`swc-checkbox-group`使用

:::demo
```vue
<template>
    <swc-checkbox-group onchange="console.log(this.value)">
        <swc-checkbox value="1" checked>苹果</swc-checkbox>
        <swc-checkbox value="2">橘子</swc-checkbox>
        <swc-checkbox value="3">香蕉</swc-checkbox>
    </swc-checkbox-group>
</template>
```
:::
