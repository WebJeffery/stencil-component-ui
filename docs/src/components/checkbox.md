# Checkbox 多选框

一组备选项中进行多选

## 基础用法

<swc-checkbox>苹果</swc-checkbox>

```html
<swc-checkbox>苹果</swc-checkbox>
```

## 自定义选中和没有选中的值

> 通过 `true-label` 和 `false-label` 来设置选中和没有选中的值，通常适用于单个选择框的情况

<swc-checkbox true-label="1" false-label="0" checked onchange="console.log(this.value)">勾选即同意本协议</swc-checkbox>

```html
<swc-checkbox true-label="1" false-label="0">勾选即同意本协议</swc-checkbox>
```

## 禁用效果

<swc-checkbox disabled>苹果</swc-checkbox>
<swc-checkbox disabled checked>苹果</swc-checkbox>

```html
<swc-checkbox disabled>苹果</swc-checkbox>
```

## 配合`swc-checkbox-group`使用

<swc-checkbox-group onchange="console.log(this.value)">
    <swc-checkbox value="1" checked>苹果</swc-checkbox>
    <swc-checkbox value="2">橘子</swc-checkbox>
    <swc-checkbox value="3">香蕉</swc-checkbox>
</swc-checkbox-group>

```html
<swc-checkbox-group onchange="console.log(this.value)">
    <swc-checkbox value="1" checked>苹果</swc-checkbox>
    <swc-checkbox value="2">橘子</swc-checkbox>
    <swc-checkbox value="3">香蕉</swc-checkbox>
</swc-checkbox-group>
```
