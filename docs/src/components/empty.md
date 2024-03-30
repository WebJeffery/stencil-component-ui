# Empty 空状态

## 常规用法

空状态时的占位提示。

:::demo
```vue
<template>
    <swc-empty>描述文字</swc-empty>
</template>
```
:::

## 禁用选项

通过 `name` 为 `image` 的 `slot` 来重写占位图片

:::demo
```vue
<template>
    <swc-empty>
        <swc-icon name="picture-outline" size="160" color="#cfcfcf" slot="image"></swc-icon>
        暂无数据
    </swc-empty>
</template>
```
:::
