# Tab 标签页

分隔内容上有关联但属于不同类别的数据集合。

## 基础用法

最常见的用法

:::demo
```vue
<template>
    <swc-tabs>
        <swc-tab-pane label="用户管理"> 用户管理 </swc-tab-pane>
        <swc-tab-pane label="配置管理"> 配置管理 </swc-tab-pane>
        <swc-tab-pane label="角色管理"> 角色管理 </swc-tab-pane>
        <swc-tab-pane label="权限管理"> 权限管理 </swc-tab-pane>
    </swc-tabs>
</template>
```
:::

## 标识 name

每个`swc-tab-pane`需要指定一个标识`name`，没有会默认以序列号为`name`,

`active` 作用在 `swc-tab` 上，可以指定切换到具体标签页，也可以指定初始值。

:::demo
```vue
<template>
    <swc-tabs active="b" id="tab3">
        <swc-tab-pane label="用户管理" index="a"> 用户管理 </swc-tab-pane>
        <swc-tab-pane label="配置管理" index="b"> 配置管理 </swc-tab-pane>
        <swc-tab-pane label="角色管理" index="c"> 角色管理 </swc-tab-pane>
        <swc-tab-pane label="权限管理" index="d"> 权限管理 </swc-tab-pane>
    </swc-tabs>
    <swc-button type="success" onclick="document.getElementById('tab3').setAttribute('active', 'd')">跳转到-权限管理</swc-button>
</template>
```
:::

## 其他

当 `tab-pane` 比较多时，两次会会出现按钮，点击按钮可以左右滚动。

:::demo
```vue
<template>
    <swc-tabs active="2" id="tab1">
        <swc-tab-pane label="用户管理">
            用户管理
        </swc-tab-pane>
        <swc-tab-pane label="配置管理">
            配置管理
        </swc-tab-pane>
        <swc-tab-pane label="角色管理">
            角色管理
        </swc-tab-pane>
        <swc-tab-pane label="权限管理">
            权限管理
        </swc-tab-pane>
        <swc-tab-pane label="权限管理">
            权限管理
        </swc-tab-pane>
        <swc-tab-pane label="权限管理">
            权限管理
        </swc-tab-pane>
        <swc-tab-pane label="权限管理">
            权限管理
        </swc-tab-pane>
        <swc-tab-pane label="权限管理">
            权限管理
        </swc-tab-pane>
        <swc-tab-pane label="权限管理">
            权限管理
        </swc-tab-pane>
        <swc-tab-pane label="权限管理">
            权限管理
        </swc-tab-pane>
        <swc-tab-pane label="权限管理">
            权限管理
        </swc-tab-pane>
        <swc-tab-pane label="权限管理">
            权限管理
        </swc-tab-pane>
        <swc-tab-pane label="权限管理">
            权限管理
        </swc-tab-pane>
    </swc-tabs>
    
</template>
<script setup>
import { onMounted } from 'vue';
onMounted(()=>{
    document.getElementById("tab").addEventListener('change', ev => {
        console.log(ev)
        $ivy.message({message: `当前活动的标签页是：${ev.detail}`})
    })
})
</script>
```
:::

