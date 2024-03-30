# Breadcrumb 面包屑

## 基础用法

基础用法当然是最基础的用法

:::demo
```vue
<template>
    <swc-breadcrumb>
        <swc-breadcrumb-item href="http://www.baidu.com">首页</swc-breadcrumb-item>
        <swc-breadcrumb-item>产品动态</swc-breadcrumb-item>
        <swc-breadcrumb-item>动态1</swc-breadcrumb-item>
    </swc-breadcrumb>
</template>
```
:::

## 自定义分隔符

通过  `separator` 属性设置分隔符

:::demo
```vue
<template>
    <swc-breadcrumb separator=">">
        <swc-breadcrumb-item href="http://www.baidu.com">首页</swc-breadcrumb-item>
        <swc-breadcrumb-item>产品动态</swc-breadcrumb-item>
        <swc-breadcrumb-item>动态1</swc-breadcrumb-item>
    </swc-breadcrumb>
</template>
```
:::

