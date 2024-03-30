# Tooltip 文字提示

## 基础用法

通过设置 placement 属性可以设置 tooltip 的位置;

可选位置：`top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end`

<div style="width: 400px;">
    <div style="display: flex;justify-content: space-between;padding: 0 70px">
        <swc-tooltip content="Tooltip 文字提示" placement="top-start">
            <swc-button type="success">上左</swc-button>
        </swc-tooltip>
        <swc-tooltip content="Tooltip 文字提示" placement="top">
            <swc-button type="success">上边</swc-button>
        </swc-tooltip>
        <swc-tooltip content="Tooltip 文字提示" placement="top-end">
            <swc-button type="success">上右</swc-button>
        </swc-tooltip>
    </div>
    <div style="display: flex;justify-content: space-between;height: 180px;padding: 20px 0;">
        <div style="display: inline-flex;justify-content: space-between;flex-direction: column;">
            <swc-tooltip content="Tooltip 文字提示" placement="left-start">
                <swc-button type="success">左上</swc-button>
            </swc-tooltip>
            <swc-tooltip content="Tooltip 文字提示" placement="left">
                <swc-button type="success">左边</swc-button>
            </swc-tooltip>
            <swc-tooltip content="Tooltip 文字提示" placement="left-end">
                <swc-button type="success">左下</swc-button>
            </swc-tooltip>
        </div>
        <div style="flex: auto;"></div>
        <div style="display: inline-flex;justify-content: space-between;flex-direction: column;">
            <swc-tooltip content="Tooltip 文字提示" placement="right-start">
                <swc-button type="success">右上</swc-button>
            </swc-tooltip>
            <swc-tooltip content="Tooltip 文字提示" placement="right">
                <swc-button type="success">右边</swc-button>
            </swc-tooltip>
            <swc-tooltip content="Tooltip 文字提示" placement="right-end">
                <swc-button type="success">右下</swc-button>
            </swc-tooltip>
        </div>
    </div>
    <div style="display: flex;justify-content: space-between;padding: 0 70px">
        <swc-tooltip content="Tooltip 文字提示" placement="bottom-start">
            <swc-button type="success">下左</swc-button>
        </swc-tooltip>
        <swc-tooltip content="Tooltip 文字提示" placement="bottom">
            <swc-button type="success">下边</swc-button>
        </swc-tooltip>
        <swc-tooltip content="Tooltip 文字提示" placement="bottom-end">
            <swc-button type="success">下右</swc-button>
        </swc-tooltip>
    </div>
</div>

```html
<div style="width: 400px;">
    <div style="display: flex;justify-content: space-between;padding: 0 70px">
        <swc-tooltip content="Tooltip 文字提示" placement="top-start">
            <swc-button type="success">上左</swc-button>
        </swc-tooltip>
        <swc-tooltip content="Tooltip 文字提示" placement="top">
            <swc-button type="success">上边</swc-button>
        </swc-tooltip>
        <swc-tooltip content="Tooltip 文字提示" placement="top-end">
            <swc-button type="success">上右</swc-button>
        </swc-tooltip>
    </div>
    <div style="display: flex;justify-content: space-between;height: 180px;padding: 20px 0;">
        <div style="display: inline-flex;justify-content: space-between;flex-direction: column;">
            <swc-tooltip content="Tooltip 文字提示" placement="left-start">
                <swc-button type="success">左上</swc-button>
            </swc-tooltip>
            <swc-tooltip content="Tooltip 文字提示" placement="left">
                <swc-button type="success">左边</swc-button>
            </swc-tooltip>
            <swc-tooltip content="Tooltip 文字提示" placement="left-end">
                <swc-button type="success">左下</swc-button>
            </swc-tooltip>
        </div>
        <div style="flex: auto;"></div>
        <div style="display: inline-flex;justify-content: space-between;flex-direction: column;">
            <swc-tooltip content="Tooltip 文字提示" placement="right-start">
                <swc-button type="success">右上</swc-button>
            </swc-tooltip>
            <swc-tooltip content="Tooltip 文字提示" placement="right">
                <swc-button type="success">右边</swc-button>
            </swc-tooltip>
            <swc-tooltip content="Tooltip 文字提示" placement="right-end">
                <swc-button type="success">右下</swc-button>
            </swc-tooltip>
        </div>
    </div>
    <div style="display: flex;justify-content: space-between;padding: 0 70px">
        <swc-tooltip content="Tooltip 文字提示" placement="bottom-start">
            <swc-button type="success">下左</swc-button>
        </swc-tooltip>
        <swc-tooltip content="Tooltip 文字提示" placement="bottom">
            <swc-button type="success">下边</swc-button>
        </swc-tooltip>
        <swc-tooltip content="Tooltip 文字提示" placement="bottom-end">
            <swc-button type="success">下右</swc-button>
        </swc-tooltip>
    </div>
</div>
```

## 主题

通过`theme`属性可以设置主题，可选值`light/dark`

<swc-tooltip content="Tooltip 文字提示">
    <swc-button type="success">默认/light</swc-button>
</swc-tooltip>
<swc-tooltip content="Tooltip 文字提示" theme="dark" class="margin-left-20">
    <swc-button type="success">dark</swc-button>
</swc-tooltip>

```html
<swc-tooltip content="Tooltip 文字提示">
    <swc-button type="success">默认</swc-button>
</swc-tooltip>
<swc-tooltip content="Tooltip 文字提示" theme="dark" class="ml-20">
    <swc-button type="success">默认</swc-button>
</swc-tooltip>
```

## 多行文本

通过给`slot=content`的元素设置`style="word-break: initial;white-space: initial"`来实现多行文本的需求

<swc-tooltip content="Tooltip 文字提示">
    <swc-button type="success">默认</swc-button>
    <div style="width: 200px;word-break: initial;white-space: initial;" slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</div>
</swc-tooltip>

```html
<swc-tooltip content="Tooltip 文字提示">
    <swc-button type="success">默认</swc-button>
    <div style="width: 200px;word-break: initial;white-space: initial;" slot="content">
        史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
    </div>
</swc-tooltip>
```
