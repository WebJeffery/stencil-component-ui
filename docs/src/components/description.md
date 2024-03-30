# Description 描述列表

## 基础用法

:::demo
```vue
<template>
    <swc-description>
        <swc-description-item label="姓名">Tom</swc-description-item>
        <swc-description-item label="性别"> 男 </swc-description-item>
        <swc-description-item label="年龄"> 28 </swc-description-item>
        <swc-description-item label="地址"> 上海市青浦区华新镇 </swc-description-item>
    </swc-description>
</template>
```
:::

## 增加 border



:::demo
```vue
<template>
    <swc-description border>
        <swc-description-item label="姓名">Tom</swc-description-item>
        <swc-description-item label="性别"> 男 </swc-description-item>
        <swc-description-item label="年龄"> 28 </swc-description-item>
        <swc-description-item label="地址" span="3"> 上海市青浦区华新镇 </swc-description-item>
    </swc-description>
</template>
```
:::

## 增加 header


:::demo
```vue
<template>
    <swc-description border header="个人信息">
        <swc-description-item label="姓名">Tom</swc-description-item>
        <swc-description-item label="性别"> 男 </swc-description-item>
        <swc-description-item label="年龄"> 28 </swc-description-item>
        <swc-description-item label="地址" span="3"> 上海市青浦区华新镇 </swc-description-item>
    </swc-description>
</template>
```
:::

## 设置 label-width



:::demo
```vue
<template>
    <swc-description border>
        <swc-description-item label="姓名">Tom</swc-description-item>
        <swc-description-item label="性别"> 男 </swc-description-item>
        <swc-description-item label="年龄"> 28 </swc-description-item>
        <swc-description-item label="地址" span="3"> 上海市青浦区华新镇 </swc-description-item>
    </swc-description>
</template>
```
:::

## Description Prop

| Prop         | 描述        | 类型         | 可选值 | 默认值         |
|--------------|-----------|------------|-----|-------------|
| `border`     | 是否显示边框    | `boolean`  | -   | `false`     |
| `columns`    | 每行显示的列数   | `number`   | -   | `3`         |
| `header`     | 标题        | `string`   | -   | `undefined` |
| `labelWidth` | label 的宽度 | `string`   | -   | `undefined` |

## DescriptionItem Prop

| Prop         | 描述         | 类型     | 可选值 | 默认值    |
|--------------|------------| -------- |-----|--------|
| `label`      | label 的内容  | `string` | -   | `''`   |
| `labelWidth` | label 的宽度  | `string` | -   | `'100px'` |
| `span`       | 占有的列数      | `string` | -   | `1`    |
