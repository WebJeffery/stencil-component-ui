# Row/Col 栅格

## 基础用法

常规用法，只设置`span`属性

:::demo
```vue
<template>
  <swc-row>
    <swc-col span="12">12</swc-col>
    <swc-col span="12" style="background-color: #67C23A;">12</swc-col>
  </swc-row>
  <swc-row>
    <swc-col span="8">8</swc-col>
    <swc-col span="8" style="background-color: #67C23A;">8</swc-col>
    <swc-col span="8">8</swc-col>
  </swc-row>
  <swc-row>
    <swc-col span="6">6</swc-col>
    <swc-col span="6" style="background-color: #67C23A;">6</swc-col>
    <swc-col span="6">6</swc-col>
    <swc-col span="6" style="background-color: #67C23A;">6</swc-col>
  </swc-row>
</template>
```
:::

## 间隔

通过`Gutter`设置 col 组件之间的间隔

:::demo
```vue
<template>
  <swc-row gutter="10">
    <swc-col span="6">6</swc-col>
    <swc-col span="6" style="background-color: #67C23A;">6</swc-col>
    <swc-col span="6">6</swc-col>
    <swc-col span="6" style="background-color: #67C23A;">6</swc-col>
  </swc-row>
</template>
```
:::

## 偏移量

通过`Offset`设置偏移量

:::demo
```vue
<template>
  <swc-row>
    <swc-col span="8">8</swc-col>
    <swc-col span="4" offset="4" style="background-color: #67C23A;">4</swc-col>
    <swc-col span="8">8</swc-col>
  </swc-row>
</template>
<style scoped>
.grid-item {
    height: 32px;
    line-height: 32px;
    background-color: #409EFF;
    color: white;
    text-align: center;
}
.grid-item:nth-child(2n){
    background-color: #67C23A;
}
</style>
```
:::

