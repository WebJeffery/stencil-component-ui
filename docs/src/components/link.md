# Link 链接

文字超链接

## 基础用法

基础的文字链接用法。

<swc-link href="https://www.baidu.com">default</swc-link>
<swc-link type="primary" class="margin-left">primary</swc-link>
<swc-link type="success" class="margin-left">success</swc-link>
<swc-link type="warning" class="margin-left">warning</swc-link>
<swc-link type="danger" class="margin-left">danger</swc-link>
<swc-link type="info" class="margin-left">info</swc-link>

```html
<swc-link href="https://www.baidu.com">default</swc-link>
<swc-link type="primary" class="margin-left">primary</swc-link>
<swc-link type="success" class="margin-left">success</swc-link>
<swc-link type="warning" class="margin-left">warning</swc-link>
<swc-link type="danger" class="margin-left">danger</swc-link>
<swc-link type="info" class="margin-left">info</swc-link>
```

## 禁用状态

文字链接不可用状态。

<swc-link href="https://www.baidu.com" disabled>default</swc-link>
<swc-link type="primary" disabled class="margin-left">primary</swc-link>
<swc-link type="success" disabled class="margin-left">success</swc-link>
<swc-link type="warning" disabled class="margin-left">warning</swc-link>
<swc-link type="danger" disabled class="margin-left">danger</swc-link>
<swc-link type="info" disabled class="margin-left">info</swc-link>

```html
<swc-link href="https://www.baidu.com" disabled>default</swc-link>
<swc-link type="primary" disabled class="margin-left">primary</swc-link>
<swc-link type="success" disabled class="margin-left">success</swc-link>
<swc-link type="warning" disabled class="margin-left">warning</swc-link>
<swc-link type="danger" disabled class="margin-left">danger</swc-link>
<swc-link type="info" disabled class="margin-left">info</swc-link>
```

## 显示下划线

<swc-link href="https://www.baidu.com" underline>default</swc-link>
<swc-link type="primary" underline class="margin-left">primary</swc-link>
<swc-link type="success" underline class="margin-left">success</swc-link>
<swc-link type="warning" underline class="margin-left">warning</swc-link>
<swc-link type="danger" underline class="margin-left">danger</swc-link>
<swc-link type="info" underline class="margin-left">info</swc-link>

```html
<swc-link href="https://www.baidu.com" underline>default</swc-link>
<swc-link type="primary" underline class="margin-left">primary</swc-link>
<swc-link type="success" underline class="margin-left">success</swc-link>
<swc-link type="warning" underline class="margin-left">warning</swc-link>
<swc-link type="danger" underline class="margin-left">danger</swc-link>
<swc-link type="info" underline class="margin-left">info</swc-link>
```

## 可用的 CSS 变量

通过暴露的 CSS 变量可以修改其组件的部分样式

::: details 点击代开

```css
:host {
  --ivy-link-font-size: var(--ivy-font-size, 14px);
  --ivy-link-font-weight: var(--ivy-font-weight-primary);
  --ivy-link-text-color: var(--ivy-text-color-regular);
  --ivy-link-hover-text-color: var(--ivy-color-primary);
  --ivy-link-disabled-text-color: var(--swc-text-color-placeholder);
}
```
:::

## Props

| 属性名    | 说明             | 类型      | 可选值                                | 默认值 |
| --------- | ---------------- | --------- | ------------------------------------- | ------ |
| type      | 类型             | `string`  | `primary/success/warning/danger/info` | -      |
| disabled  | 禁用             | `boolean` | -                                     | -      |
| underline | 下划线           | `boolean` | -                                     | -      |
| href      | 同 a 标签的 href | `string`  | -                                     | -      |
