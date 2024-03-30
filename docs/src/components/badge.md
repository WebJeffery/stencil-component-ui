# Badge 标记

出现在按钮、图标旁的数字或状态标记

## 基础用法

展示新消息数量。

<swc-badge value="12">
    <swc-button>评论</swc-button>
</swc-badge>
<swc-badge value="10" class="ml-40">
    <swc-button>踩</swc-button>
</swc-badge>
<swc-badge value="22" class="ml-40">
    <swc-button>点赞</swc-button>
</swc-badge>

```html
<swc-badge value="12">
    <swc-button>评论</swc-button>
</swc-badge>
<swc-badge value="10" class="ml-40">
    <swc-button>踩</swc-button>
</swc-badge>
<swc-badge value="22" class="ml-40">
    <swc-button>点赞</swc-button>
</swc-badge>
```

## 最大值

可使用`max`自定义最大值,默认最大值为`99`。

<swc-badge value="100">
    <swc-button>评论</swc-button>
</swc-badge>
<swc-badge value="100" max="10" class="ml-40">
    <swc-button>评论</swc-button>
</swc-badge>

```html
<swc-badge value="100">
    <swc-button>评论</swc-button>
</swc-badge>
<swc-badge value="100" max="10" class="ml-40">
    <swc-button>评论</swc-button>
</swc-badge>
```

## 自定义内容

使用`value`输入非数字字符串来自定义显示内容。

<swc-badge value="new">
    <swc-button>评论</swc-button>
</swc-badge>
<swc-badge value="hot" class="ml-40">
    <swc-button>评论</swc-button>
</swc-badge>

```html
<swc-badge value="new">
    <swc-button>评论</swc-button>
</swc-badge>
<swc-badge value="hot" class="ml-40">
    <swc-button>评论</swc-button>
</swc-badge>
```

## 小红点

以红点的形式标注需要关注的内容。

<swc-badge is-dot>
    <ivy-icon name="chat-dot-round"></ivy-icon>
</swc-badge>
<swc-badge is-dot class="ml-40">
    <swc-button>评论</swc-button>
</swc-badge>

```html
<swc-badge is-dot>
    <ivy-icon name="chat-dot-round"></ivy-icon>
</swc-badge>
<swc-badge is-dot class="ml-40">
    <swc-button>评论</swc-button>
</swc-badge>
```

## 类型

支持5中类型，`primary`、`success`、`warning`、`error`、`info`；默认是`error`、

<swc-badge value="12">
    <swc-button>评论</swc-button>
</swc-badge>
<swc-badge value="12" type="primary" class="ml-40">
    <swc-button>评论</swc-button>
</swc-badge>
<swc-badge value="12" type="success" class="ml-40">
    <swc-button>评论</swc-button>
</swc-badge>
<swc-badge value="12" type="warning" class="ml-40">
    <swc-button>评论</swc-button>
</swc-badge>
<swc-badge value="12" type="info" class="ml-40">
    <swc-button>评论</swc-button>
</swc-badge>

```html
<swc-badge value="12">
    <swc-button>评论</swc-button>
</swc-badge>
<swc-badge value="12" type="primary" class="ml-40">
    <swc-button>评论</swc-button>
</swc-badge>
<swc-badge value="12" type="success" class="ml-40">
    <swc-button>评论</swc-button>
</swc-badge>
<swc-badge value="12" type="warning" class="ml-40">
    <swc-button>评论</swc-button>
</swc-badge>
<swc-badge value="12" type="info" class="ml-40">
    <swc-button>评论</swc-button>
</swc-badge>
```

## Attributes

| 属性名 | 描述 | 类型 | 可选值 | 默认值 |
|-|-|-|-|-|
|value|数量，输入非数字类型的字符串时显示汉字|string|||
|max|最大值|string||`99`|
|type|类型|string|`primary/success/warning/error/info`|`error`|

<style scoped>
.ml-40{
    margin-left: 40px;
}
</style>
