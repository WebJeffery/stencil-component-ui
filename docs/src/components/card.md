# Card 卡片

## 常规用法

包含头部和主题部分

:::demo
```vue
<template>
    <swc-card style="width: 300px;">
        <p slot="header" style="margin: 0;">卡片头部</p>
        <div>卡片</div>
    </swc-card>
</template>
```
:::

## 阴影

通过设置`shadow`来显示阴影

:::demo
```vue
<template>
    <swc-card style="width: 300px;" shadow>
        <p slot="header" style="margin: 0;">卡片头部</p>
        <div>卡片</div>
    </swc-card>
</template>
```
:::
