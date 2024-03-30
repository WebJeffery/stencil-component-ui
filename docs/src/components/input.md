# Input 输入框

## 基础用法

最常见的用法

:::demo
```vue
<template>
    <swc-input style="width: 224px;" placeholder="请输入"></swc-input>
</template>
```
:::

## 禁用状态

通过设置 `disabled` 属性来禁用输入框

:::demo
```vue
<template>
    <swc-input disabled style="width: 224px;"></swc-input>
</template>
```
:::

## 只读状态

通过设置 `readonly` 属性来禁用输入框

:::demo
```vue
<template>
    <swc-input readonly style="width: 224px;"></swc-input>
</template>
```
:::

## 前置图标和后置图标

通过设置 `prefix-icon` 属性来添加前置图标，通过设置 `suffix-icon` 属性来添加后置图标

:::demo
```vue
<template>
    <swc-input style="width: 224px;" prefix-icon="reading"></swc-input>
    <swc-input style="width: 224px;" suffix-icon="date"></swc-input>
    <swc-input style="width: 224px;" prefix-icon="reading" suffix-icon="date"></swc-input>
</template>
<script setup>
import { onMounted } from 'vue';
onMounted(()=>{
    document.getElementById('input1').addEventListener('change', ev=>{
        console.log(ev, this.value)
    })
})
</script>
```
:::

