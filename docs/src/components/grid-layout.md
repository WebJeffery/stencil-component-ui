# Grid 宫格布局

## 基础用法

常规用法

:::demo
```vue
<template>
    <swc-grid class="grid-row">
        <swc-grid-item span="12" class="grid-item" style="height: 100px">12</swc-grid-item>
        <swc-grid-item span="12" class="grid-item" style="background-color: #67C23A;height: 100px">12</swc-grid-item>
        <swc-grid-item span="12" class="grid-item" style="height: 100px">12</swc-grid-item>
        <swc-grid-item span="12" class="grid-item" style="background-color: #67C23A;height: 100px">12</swc-grid-item>
        <swc-grid-item span="12" class="grid-item" style="height: 100px">12</swc-grid-item>
        <swc-grid-item span="12" class="grid-item" style="background-color: #67C23A;height: 100px">12</swc-grid-item>
        <swc-grid-item span="12" class="grid-item" style="height: 100px">12</swc-grid-item>
    </swc-grid>
</template>
```
:::

## 边框

通过`border`设置 grid 组件的边框

:::demo
```vue
<template>
    <swc-grid class="grid-row" border>
        <swc-grid-item span="12" class="grid-item" style="height: 100px">12</swc-grid-item>
        <swc-grid-item span="12" class="grid-item" style="height: 100px">12</swc-grid-item>
        <swc-grid-item span="12" class="grid-item" style="height: 100px">12</swc-grid-item>
        <swc-grid-item span="12" class="grid-item" style="height: 100px">12</swc-grid-item>
        <swc-grid-item span="12" class="grid-item" style="height: 100px">12</swc-grid-item>
        <swc-grid-item span="12" class="grid-item" style="height: 100px">12</swc-grid-item>
        <swc-grid-item span="12" class="grid-item" style="height: 100px">12</swc-grid-item>
    </swc-grid>
</template>
```
:::

## 宽高一致

通过 `square` 设置宽高一样

:::demo
```vue
<template>
    <swc-grid class="grid-row" border square>
        <swc-grid-item span="12" class="grid-item">12</swc-grid-item>
        <swc-grid-item span="12" class="grid-item">12</swc-grid-item>
        <swc-grid-item span="12" class="grid-item">12</swc-grid-item>
        <swc-grid-item span="12" class="grid-item">12</swc-grid-item>
        <swc-grid-item span="12" class="grid-item">12</swc-grid-item>
        <swc-grid-item span="12" class="grid-item">12</swc-grid-item>
        <swc-grid-item span="12" class="grid-item">12</swc-grid-item>
    </swc-grid>
</template>
```
:::

# Props 

| 属性     | 描述       | 类型      | 可选值 | 默认值 |
|--------|----------|---------|-----|-----|
| border | 边框       | boolean | -   | -   |
| square | 子元素宽高一致  | boolean | -   | -   |
| col    | 一行子元素的数量 | string  | -   | `3` |

<style scoped>
.grid-item {
    line-height: 32px;
    text-align: center;
}

</style>
