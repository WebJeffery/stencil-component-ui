# Empty 空状态

## 常规用法

空状态时的占位提示。

<swc-empty>描述文字</swc-empty>

```html
<swc-empty>描述文字</swc-empty>
```

## 禁用选项

通过 `name` 为 `image` 的 `slot` 来重写占位图片

<swc-empty>
    <swc-icon name="picture-outline" size="160" color="#cfcfcf" slot="image"></swc-icon>
    <!-- <img src="http://www.08lr.cn/uploads/allimg/170822/1-1FR21A020.jpg" slot="image"> -->
    暂无数据
</swc-empty>

```html
<swc-empty>
    <swc-icon name="picture-outline" size="160" color="#cfcfcf" slot="image"></swc-icon>
    暂无数据
</swc-empty>
```
