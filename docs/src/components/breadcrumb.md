# Breadcrumb 面包屑

## 基础用法

基础用法当然是最基础的用法

<swc-breadcrumb>
    <swc-breadcrumb-item href="http://www.baidu.com">首页</swc-breadcrumb-item>
    <swc-breadcrumb-item>产品动态</swc-breadcrumb-item>
    <swc-breadcrumb-item>动态1</swc-breadcrumb-item>
</swc-breadcrumb>

```html
<swc-breadcrumb>
    <swc-breadcrumb-item href="http://www.baidu.com">首页</swc-breadcrumb-item>
    <swc-breadcrumb-item>产品动态</swc-breadcrumb-item>
    <swc-breadcrumb-item>动态1</swc-breadcrumb-item>
</swc-breadcrumb>
```

## 自定义分隔符

通过  `separator` 属性设置分隔符

<swc-breadcrumb separator=">">
    <swc-breadcrumb-item href="http://www.baidu.com">首页</swc-breadcrumb-item>
    <swc-breadcrumb-item>产品动态</swc-breadcrumb-item>
    <swc-breadcrumb-item>动态1</swc-breadcrumb-item>
</swc-breadcrumb>

```html
<swc-breadcrumb separator=">">
    <swc-breadcrumb-item href="http://www.baidu.com">首页</swc-breadcrumb-item>
    <swc-breadcrumb-item>产品动态</swc-breadcrumb-item>
    <swc-breadcrumb-item>动态1</swc-breadcrumb-item>
</swc-breadcrumb>
```

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
