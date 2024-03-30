# Clipboard 复制到剪切板

## 复制自身的 `value` 属性值


:::demo
```vue
<template>
    <swc-clipboard-copy value="自身的 value 属性值" id="s">Copy</swc-clipboard-copy>
</template>
```
:::

> 可以使用自定义事件`clipboard-copy`在复制文本后做一些操作


## 通过 for 属性复制其它元素的内容

:::demo
```vue
<template>
    <swc-clipboard-copy for="p" id="s">Copy</swc-clipboard-copy>
    <p id="p">p标签内的内容</p>
</template>
```
:::

## 通过 for 属性复制其它元素的内容

:::demo
```vue
<template>
<swc-clipboard-copy for="p" id="s">Copy</swc-clipboard-copy>

<input id="p" value="input元素的value值" />
</template>
```
:::
