# Form 表单

:::demo
```vue
<template>
<swc-form id="form">
    <swc-form-item label="姓名" message="请输入姓名" validator="function(val){return !!val}">
        <swc-input></swc-input>
    </swc-form-item>
    <swc-button type="primary" id="submits" @click="handleClick">提交</swc-button>
</swc-form>
</template>
<script setup>

const handleClick = ()=>{
    document.getElementById('form').validate(valid=>{
        console.log(valid)
    })
}
</script>
```
:::
