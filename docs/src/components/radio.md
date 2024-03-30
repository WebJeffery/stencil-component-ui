# Checkbox 多选框

一组备选项中进行多选

## 基础用法

:::demo
```vue
<template>
    <swc-radio>苹果</swc-radio>
</template>
```
:::

## 禁用效果

:::demo
```vue
<template>
    <swc-radio checked disabled>苹果</swc-radio> <swc-radio disabled>苹果</swc-radio>
</template>
```
:::

## 配合`swc-radio-group`使用

:::demo
```vue
<template>
    <swc-radio-group value="1" onchange="console.log(this.value)">
        <swc-radio label="1">苹果</swc-radio>
        <swc-radio label="2">橘子</swc-radio>
        <swc-radio label="3">香蕉</swc-radio>
    </swc-radio-group>
</template>
```
:::
