# Message 全局提示

## 一般用法

:::demo
```vue
<template>
    <swc-button type="primary" id="btn">显示 Message</swc-button>
</template>

<script setup>
import { onMounted } from 'vue';
onMounted(()=>{
    document.getElementById('btn').addEventListener('click', ()=>{
        $swc.message({content: '这是测试内容'})
    })
})
</script>
```
:::
