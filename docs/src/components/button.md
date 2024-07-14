
# Button 按钮

常用的操作按钮。

## 基础用法

使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

:::demo

```vue
<template>
  <swc-row>
    <swc-button>默认按钮</swc-button>
    <swc-button type="primary">主要按钮</swc-button>
    <swc-button type="success">成功按钮</swc-button>
    <swc-button type="info">信息按钮</swc-button>
    <swc-button type="warning">警告按钮</swc-button>
    <swc-button type="danger">危险按钮</swc-button>
  </swc-row>

  <swc-row>
    <swc-button>朴素按钮</swc-button>
    <swc-button type="primary" plain>主要按钮</swc-button>
    <swc-button type="success" plain>成功按钮</swc-button>
    <swc-button type="info" plain>信息按钮</swc-button>
    <swc-button type="warning" plain>警告按钮</swc-button>
    <swc-button type="danger" plain>危险按钮</swc-button>
  </swc-row>

  <swc-row>
    <swc-button>幽灵按钮</swc-button>
    <swc-button type="primary" ghost>主要按钮</swc-button>
    <swc-button type="success" ghost>成功按钮</swc-button>
    <swc-button type="info" ghost>信息按钮</swc-button>
    <swc-button type="warning" ghost>警告按钮</swc-button>
    <swc-button type="danger" ghost>危险按钮</swc-button>
  </swc-row>

  <swc-row>
    <swc-button round>圆角按钮</swc-button>
    <swc-button type="primary" round>主要按钮</swc-button>
    <swc-button type="success" round>成功按钮</swc-button>
    <swc-button type="info" round>信息按钮</swc-button>
    <swc-button type="warning" round>警告按钮</swc-button>
    <swc-button type="danger" round>危险按钮</swc-button>
  </swc-row>

  <swc-row>
    <swc-button icon="search" circle></swc-button>
    <swc-button type="primary" icon="edit" circle></swc-button>
    <swc-button type="success" icon="check" circle></swc-button>
    <swc-button type="info" icon="message" circle></swc-button>
    <swc-button type="warning" icon="star" circle></swc-button>
    <swc-button type="danger" icon="delete" circle></swc-button>
  </swc-row>
</template>

```
:::


## 禁用状态


你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

:::demo

```vue
<template>
  <swc-row>
  <swc-button disabled>默认按钮</swc-button>
  <swc-button type="primary" disabled>主要按钮</swc-button>
  <swc-button type="success" disabled>成功按钮</swc-button>
  <swc-button type="info" disabled>信息按钮</swc-button>
  <swc-button type="warning" disabled>警告按钮</swc-button>
  <swc-button type="danger" disabled>危险按钮</swc-button>
</swc-row>

<swc-row>
  <swc-button plain disabled>朴素按钮</swc-button>
  <swc-button type="primary" plain disabled>主要按钮</swc-button>
  <swc-button type="success" plain disabled>成功按钮</swc-button>
  <swc-button type="info" plain disabled>信息按钮</swc-button>
  <swc-button type="warning" plain disabled>警告按钮</swc-button>
  <swc-button type="danger" plain disabled>危险按钮</swc-button>
</swc-row>
</template>
```
:::


## 链接按钮

:::demo
```vue
<template>
  <swc-row>
    <swc-button link>链接按钮</swc-button>
    <swc-button type="primary" link>主要按钮</swc-button>
    <swc-button type="success" link>成功按钮</swc-button>
    <swc-button type="info" link>信息按钮</swc-button>
    <swc-button type="warning" link>警告按钮</swc-button>
    <swc-button type="danger" link>危险按钮</swc-button>
  </swc-row>
</template>
```
:::

## 文字按钮

没有边框和背景色的按钮。

:::demo
```vue
<template>
  <swc-row>
    <swc-button text>链接按钮</swc-button>
    <swc-button type="primary" text>主要按钮</swc-button>
    <swc-button type="success" text>成功按钮</swc-button>
    <swc-button type="info" text>信息按钮</swc-button>
    <swc-button type="warning" text>警告按钮</swc-button>
    <swc-button type="danger" text>危险按钮</swc-button>
  </swc-row>
  <swc-row>
    <swc-button text bg>链接按钮</swc-button>
    <swc-button type="primary" text bg>主要按钮</swc-button>
    <swc-button type="success" text bg>成功按钮</swc-button>
    <swc-button type="info" text bg>信息按钮</swc-button>
    <swc-button type="warning" text bg>警告按钮</swc-button>
    <swc-button type="danger" text bg>危险按钮</swc-button>
  </swc-row>
  <swc-row>
    <swc-button text disabled>链接按钮</swc-button>
    <swc-button type="primary" text disabled>主要按钮</swc-button>
    <swc-button type="success" text disabled>成功按钮</swc-button>
    <swc-button type="info" text disabled>信息按钮</swc-button>
    <swc-button type="warning" text disabled>警告按钮</swc-button>
    <swc-button type="danger" text disabled>危险按钮</swc-button>
  </swc-row>
</template>
```
:::

## 图标按钮

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。


:::demo 

```vue
<template>
  <swc-button type="primary" icon="edit"></swc-button>
  <swc-button type="primary" icon="share"></swc-button>
  <swc-button type="primary" icon="delete"></swc-button>
  <swc-button type="primary" icon="search">搜索</swc-button>
  <swc-button type="primary" suffixIcon="upload">上传</swc-button>
</template>
```
:::

## 按钮组

以按钮组的方式出现，常用于多项类似操作。使用`<swc-button-group>`标签来嵌套你的按钮。

:::demo 

```vue
<template>
  <swc-button-group>
    <swc-button type="primary" icon="arrow-left">上一页</swc-button>
    <swc-button type="primary" suffixIcon="arrow-right">下一页</swc-button>
  </swc-button-group>
  <swc-button-group>
    <swc-button type="primary" icon="edit"></swc-button>
    <swc-button type="primary" icon="share"></swc-button>
    <swc-button type="primary" icon="delete"></swc-button>
  </swc-button-group>
</template>
```
:::

## 加载中

点击按钮来加载数据，并向用户反馈加载状态。

通过设置 `loading` 属性为 `true` 来显示加载中状态。

:::demo 

```vue
<template>
  <swc-button type="primary" :loading="true">加载中</swc-button>
  <swc-button type="primary" :loading="true">
    <div slot="loading">
        <swc-icon name="refresh-right" spin></swc-icon>
    </div>
    加载中</swc-button>
</template>
```
:::

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `large` 和 `small` 两种值

:::demo

```vue
<template>
  <swc-row>
    <swc-button size="large">大的按钮</swc-button>
    <swc-button>默认按钮</swc-button>
    <swc-button size="small">小按钮</swc-button>
    <swc-button size="large" icon="search">大的按钮</swc-button>
    <swc-button icon="search">默认按钮</swc-button>
    <swc-button size="small" icon="search">小按钮</swc-button>
  </swc-row>
  <swc-row>
    <swc-button size="large" round>大的按钮</swc-button>
    <swc-button round>默认按钮</swc-button>
    <swc-button size="small" round>小按钮</swc-button>
    <swc-button size="large" icon="search" round>大的按钮</swc-button>
    <swc-button icon="search" round>默认按钮</swc-button>
    <swc-button size="small" icon="search" round>小按钮</swc-button>
  </swc-row>
  <swc-row>
    <swc-button size="large" icon="search" circle></swc-button>
    <swc-button circle icon="search"></swc-button>
    <swc-button size="small" icon="search" circle></swc-button>
  </swc-row>
</template>
```
:::

<!-- ## 自定义颜色

您可以自定义按钮的颜色。

我们将自动计算按钮处于 hover 和 active 状态时的颜色。

:::demo
```vue
<template>
  <swc-row>
    <swc-button color="#626aef" dark="isDark">默认按钮</swc-button>
    <swc-button color="#626aef" :dark="isDark" plain>朴素按钮</swc-button>
    <swc-button color="#626aef" dark="isDark" disabled>禁用</swc-button>
    <swc-button color="#626aef" :dark="isDark" plain disabled>禁用朴素</swc-button>
  </swc-row>
</template>
```
::: -->


## Button 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   large / default / small            |    default    |
| type     | 类型   | string    |   primary / success / warning / danger / info  |     —    |
| text     | 是否文字按钮   | boolean    | — | false   |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |


## Button 插槽
| 插槽名      | 说明    |
|---------- |------------- |
| default     | 自定义默认内容   | 
| loading  | 自定义加载中组件    |
| icon  | 自定义图标组件 |
