# Table 表格

## 基础用法

:::demo
```vue
<template>
    <swc-table
        id="table"
        data-source='[{"date":"2016-05-02","name":"王小虎","address":"上海市普陀区金沙江路 1518 弄"},{"date":"2016-05-04","name":"王小虎","address":"上海市普陀区金沙江路 1517 弄"},{"date":"2016-05-01","name":"王小虎","address":"上海市普陀区金沙江路1519 弄"},{"date":"2016-05-03","name":"王小虎","address":"上海市普陀区金沙江路 1516 弄"}]'
    >
        <swc-table-column label="姓名" prop="name" width="100px"></swc-table-column>
        <swc-table-column label="日期" prop="date" min-width="120px"></swc-table-column>
        <swc-table-column label="地址" prop="address"></swc-table-column>
    </swc-table>
</template>
```
:::

## 加载中

通过设置 `loading` 属性来展示加载中的状态

:::demo
```vue
<template>
    <div style="display:flex;align-items:center;">切换状态：<swc-switch id="iSwitch" checked></swc-switch></div>
    <swc-table
        id="table1"
        loading
        data-source='[{"date":"2016-05-02","name":"王小虎","address":"上海市普陀区金沙江路 1518 弄"},{"date":"2016-05-04","name":"王小虎","address":"上海市普陀区金沙江路 1517 弄"},{"date":"2016-05-01","name":"王小虎","address":"上海市普陀区金沙江路1519 弄"},{"date":"2016-05-03","name":"王小虎","address":"上海市普陀区金沙江路 1516 弄"}]'
    >
        <swc-table-column label="姓名" prop="name" width="100px"></swc-table-column>
        <swc-table-column label="日期" prop="date" min-width="120px"></swc-table-column>
        <swc-table-column label="地址" prop="address"></swc-table-column>
    </swc-table>
    
</template>
```
:::

## Table Attrs

| 名称        | 说明           | 类型        | 可选值 | 默认值 |
| ----------- | -------------- | ----------- | ------ | ------ |
| data-source | table 的数据源 | json 字符串 | -      | -      |

## TableItem Attrs

| 名称      | 说明             | 类型   | 可选值 | 默认值 |
| --------- | ---------------- | ------ | ------ | ------ |
| prop      | 数据源中的 key   | String | -      | -      |
| label     | 表格的 title     | String | -      | -      |
| width     | 表格列的宽度     | String | -      | -      |
| min-width | 表格列的最小宽度 | String | -      | -      |

<script setup>
import { onMounted } from 'vue';
onMounted(()=>{
    document.getElementById('iSwitch').addEventListener('change', ev=>{
        const checked = ev.detail;
        if(checked){
            document.getElementById('table1').setAttribute('loading', "")
        }else{
            document.getElementById('table1').removeAttribute('loading')
        }
    })
})
</script>
