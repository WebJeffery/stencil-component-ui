# Modal 对话框

## 基础用法

通过设置show属性来显示Modal

:::demo
```vue
<template>
    <swc-button type="primary" @click="showDialog">显示 Modal</swc-button>
    <swc-dialog id="modal1" @close="closed">
        <p slot="header">Modal标题</p>
        <div>这是Modal的内容部分<br>这是Modal的内容部分<br>这是Modal的内容部分<br></div>
    </swc-dialog>
</template>
<script setup>
import { onMounted } from 'vue';
function sure(ev){
    console.log(ev)
}
onMounted(()=>{
    document.getElementById('modal1').addEventListener('sure', ev=>{
        console.log(ev)
    })
})

const showDialog = ()=>{
    document.getElementById('modal1').open()
}

const closed = ()=>{
    console.log('关闭了Modal')
}

</script>
```
:::

