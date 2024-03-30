# Divider 分割线

## 基础用法

在 slot 中写内容


:::demo
```vue
<template>
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the
  chairman, chief executive officer, and a co-founder of Apple Inc.
  <swc-divider>分割线</swc-divider>
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the
  chairman, chief executive officer, and a co-founder of Apple Inc.
</template>
```
:::

## 设置文字的位置

通过属性`placement`设置分割线文字的位置;可选值：`left/center/right`


:::demo
```vue
<template>
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the
  chairman, chief executive officer, and a co-founder of Apple Inc.
  <swc-divider>默认位置-中间</swc-divider>
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the
  chairman, chief executive officer, and a co-founder of Apple Inc.
  <swc-divider placement="left">左侧</swc-divider>
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the
  chairman, chief executive officer, and a co-founder of Apple Inc.
  <swc-divider placement="right">右侧</swc-divider>
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the
  chairman, chief executive officer, and a co-founder of Apple Inc.
</template>
```
:::

## 是否显示文字

通过添加属性`hide-text`来隐藏文字


:::demo
```vue
<template>
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the
  chairman, chief executive officer, and a co-founder of Apple Inc.
  <swc-divider>显示文字</swc-divider>
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the
  chairman, chief executive officer, and a co-founder of Apple Inc.
  <swc-divider hide-text>隐藏文字</swc-divider>
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the
  chairman, chief executive officer, and a co-founder of Apple Inc.
</template>
```
:::

## 分割线的样式

通过设置属性`type`设置分割线的样式；可选值：`solid/dotted/dashed`


:::demo
```vue
<template>
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the
  chairman, chief executive officer, and a co-founder of Apple Inc.
  <swc-divider>分割线 default</swc-divider>
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the
  chairman, chief executive officer, and a co-founder of Apple Inc.
  <swc-divider type="dotted">分割线 dotted</swc-divider>
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the
  chairman, chief executive officer, and a co-founder of Apple Inc.
  <swc-divider type="dashed">分割线 dashed</swc-divider>
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the
  chairman, chief executive officer, and a co-founder of Apple Inc.
  <swc-divider type="solid">分割线 solid</swc-divider>
  Steven Paul Jobs was an American entrepreneur and business magnate. He was the
  chairman, chief executive officer, and a co-founder of Apple Inc.
</template>
```
:::
