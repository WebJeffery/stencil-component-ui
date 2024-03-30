# Image 图片

图片容器，在保留原生 `img` 的特性下，自定义占位、加载失败等

## 基础用法

可通过 `fit` 确定图片如何适应到容器框，同原生 `object-fit`。


:::demo
```vue
<template>
    <swc-image
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        style="height: 100px;width: 100px;"
        fit="fit"
    ></swc-image>
    <swc-image
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        style="height: 100px;width: 100px;"
        fit="contain"
        class="ml-10"
    ></swc-image>
    <swc-image
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        style="height: 100px;width: 100px;"
        fit="cover"
        class="ml-10"
    ></swc-image>
    <swc-image
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        style="height: 100px;width: 100px;"
        fit="none"
        class="ml-10"
    ></swc-image>
    <swc-image
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        style="height: 100px;width: 100px;"
        fit="scale-down"
        class="ml-10"
    ></swc-image>
</template>
```
:::

## 占位内容

可通过 `slot = placeholder` 可自定义占位内容

第一个为默认加载中的占位内容，第二个为自定义加载中的占位内容


:::demo
```vue
<template>
    <swc-image src="http://www.08lr.cn/uploads/allimg/170822/1-1FR21A020.jpg" style="width: 300px;height: 200px;"></swc-image>
    <swc-image src="http://www.08lr.cn/uploads/allimg/170822/1-1FR21A020.jpg" style="width: 300px;height: 200px;" class="ml-20">
        <swc-icon name="refresh" size="28" spin slot="placeholder"></swc-icon>
    </swc-image>
</template>
```
:::

## 加载失败

可通过 `slot = error` 可自定义加载失败内容

第一个为默认加载失败的显示，第二个为自定义错误信息

:::demo
```vue
<template>
    <swc-image style="width: 300px;height: 200px;"></swc-image>
    <swc-image style="width: 300px;height: 200px;" class="ml-20">
        <swc-icon name="picture-outline" size="28" slot="error"></swc-icon>
    </swc-image>
    
</template>
<style scoped>
swc-image+swc-image{
    margin-left: 24px;
}
</style>
```
:::

