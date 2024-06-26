# Result 结果

用于反馈一系列操作任务的处理结果。

## 基础用法

:::demo
```vue
<template>
    <swc-result header="操作成功" description="Please check and modify the following information before resubmitting.">
        <div slot="extra">
            <swc-button>返回上一页</swc-button>
        </div>
    </swc-result>
</template>
```
:::

## Success

也是默认的类型

:::demo
```vue
<template>
    <swc-result type="success" header="操作成功" description="Please check and modify the following information before resubmitting.">
        <div slot="extra">
            <swc-button>返回上一页</swc-button>
        </div>
    </swc-result>
</template>
```
:::


## Warning

:::demo
```vue
<template>
    <swc-result type="warning" header="操作成功" description="Please check and modify the following information before resubmitting.">
        <div slot="extra">
            <swc-button>返回上一页</swc-button>
        </div>
    </swc-result>
</template>
```
:::

## Error

:::demo
```vue
<template>
    <swc-result type="error" header="操作成功" description="Please check and modify the following information before resubmitting.">
        <div slot="extra">
            <swc-button>返回上一页</swc-button>
        </div>
    </swc-result>
</template>
```
:::

## Info

:::demo
```vue
<template>
    <swc-result type="info" header="操作成功" description="Please check and modify the following information before resubmitting.">
        <div slot="extra">
            <swc-button>返回上一页</swc-button>
        </div>
    </swc-result>
</template>
```
:::

## Custom

:::demo
```vue
<template>
    <swc-result type="custom" header="操作成功" description="Please check and modify the following information before resubmitting.">
        <img src="/images/icon-1.svg" slot="icon" />
        <div slot="extra">
            <swc-button>返回上一页</swc-button>
        </div>
    </swc-result>
</template>
```
:::

## Attributes

| 属性名 | 描述 | 类型 | 默认值 | 可选值 |
|--|--|--|--|--|
| type | 图标的类型 |`string` | `success` |`success/warning/error/inof/custom` |
| header | 标题 |`string` | | |
| description | 描述 |`string` | | |
| header | 标题 |`string` | | |

## Slots

| 插槽名 | 描述 |
|--|--|
| icon | 当`type`为`custom`时可用 |
| extra | 操作区域 |
| default | 默认插槽 |
