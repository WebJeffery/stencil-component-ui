# Rate 评分

## 基础用法

:::demo
```vue
<template>
    <swc-rate value="2"></swc-rate>
</template>
```
:::

## 只读

通过添加 `disabled` 属性是其处于只读状态

:::demo
```vue
<template>
    <swc-rate disabled></swc-rate>
    <swc-rate value="2" disabled></swc-rate>
</template>
```
:::

## 尺寸 size

通过 `size` 可以设置组件尺寸，默认为 `font-size` 大小（20px）。

:::demo
```vue
<template>
    <swc-rate value="2" size="16"></swc-rate>
    <swc-rate value="2"></swc-rate>
    <swc-rate value="2" size="28"></swc-rate>
    <swc-rate value="2" size="34"></swc-rate>
</template>
```
:::

## 其它 Icon

通过 `icon` 可以设置其它图标。

:::demo
```vue
<template>
    <swc-rate value="2" icon="star-off"></swc-rate>
    <swc-rate value="2" icon="success"></swc-rate>
    <swc-rate value="2" icon="error"></swc-rate>
    <swc-rate value="2" icon="info"></swc-rate>
</template>
```
:::

## 颜色

通过 `color` 可以设置图标的颜色。
:::demo
```vue
<template>
    <swc-rate value="2" icon="star-off"></swc-rate>
    <swc-rate value="2" icon="success" color="green"></swc-rate>
    <swc-rate value="2" icon="error" color="red"></swc-rate>
    <swc-rate value="2" icon="info" color="#888888"></swc-rate>
</template>
```
:::

## 自定义事件

通过 `onchange` 事件可以在分值变化后执行操作

:::demo
```vue
<template>
<swc-rate value="2" onchange="alert(`当前的value：${this.value}`)"></swc-rate>
</template>
```
:::

其它的触发方式

```js
<script>
rate.addEventListener('change',function(ev){
    console.log(this.value);
    console.log(ev.target.value);
    console.log(ev.detail);
})
</script>
```

## Rate Attrs

| 名称     | 说明                      | 类型   | 可选值 | 默认值   |
| -------- | ------------------------- | ------ | ------ | -------- |
| value    | 评分的值                  | String | 1-5    | -        |
| disabled | 只读                      | String | -      | -        |
| size     | 大小-同 fontSize          | String | -      | 20px     |
| color    | 颜色-同 color             | String | -      | -        |
| icon     | 图标的名称-参考 icon 组件 | String | -      | start-on |
