# Checkbox 多选框

一组备选项中进行多选

## 基础用法

<swc-radio>苹果</swc-radio>

```html
<swc-radio>苹果</swc-radio>
```

## 禁用效果

<swc-radio checked disabled>苹果</swc-radio>
<swc-radio disabled>苹果</swc-radio>

```html
<swc-radio checked disabled>苹果</swc-radio> <swc-radio disabled>苹果</swc-radio>
```

## 配合`swc-radio-group`使用

<swc-radio-group onchange="console.log(this.value)">
    <swc-radio label="1" checked>苹果</swc-radio>
    <swc-radio label="2">橘子</swc-radio>
    <swc-radio label="3">香蕉</swc-radio>
</swc-radio-group>

```html
<swc-radio-group value="1" onchange="console.log(this.value)">
    <swc-radio label="1">苹果</swc-radio>
    <swc-radio label="2">橘子</swc-radio>
    <swc-radio label="3">香蕉</swc-radio>
</swc-radio-group>
```
