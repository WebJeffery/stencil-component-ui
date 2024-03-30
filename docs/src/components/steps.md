# steps 步骤条

## 基础用法

只设置时间和描述

:::demo
```vue
<template>
    <swc-steps>
        <swc-step  title="验证手机号"></swc-step>
        <swc-step title="修改密码"></swc-step>
        <swc-step title="完成"></swc-step>
    </swc-steps>
</template>
```
:::

## 增加描述文字

可以在标题下方增加描述性文字

:::demo
```vue
<template>
    <swc-steps :active="active">
        <swc-step  title="验证手机号">验证手机号是否正确</swc-step>
        <swc-step title="修改密码">设置新密码</swc-step>
        <swc-step title="完成">修改完成</swc-step>
    </swc-steps>
</template>
<script setup>
import { ref } from 'vue';
const active = ref(0);

const next = ()=>{
    console.log(active.value)
    if(active.value < 3){
        active.value = active.value + 1
    }else{
        active.value = 0
    }
}
</script>
```
:::

