# Drawer 抽屉

## 常规用法

<swc-button type="success" @click="click('drawer')">打开 Drawer</swc-button>

<swc-drawer id="drawer" header="Drawer标题"></swc-drawer>

```html
<swc-button type="success" onclick="document.getElementById('drawer').open()">打开 Drawer</swc-button>

<swc-drawer id="drawer" header="Drawer标题"></swc-drawer>
```

## 隐藏标题

<swc-button type="success" @click="click('drawer1')">打开 Drawer</swc-button>

<swc-drawer id="drawer1" title="Drawer标题" hide-title></swc-drawer>

```html
<swc-button type="success" onclick="document.getElementById('drawer1').open()">打开 Drawer</swc-button>

<swc-drawer id="drawer1" title="Drawer标题" hide-title></swc-drawer>
```

## 设置 zIndex

通过给组件设置`zIndex`样式来设置层级

<swc-button type="success" @click="click('drawer2')">打开 Drawer</swc-button>
<swc-drawer id="drawer2" title="Drawer标题" hide-title style="z-index: 9000;"></swc-drawer>

```html
<swc-button type="success" onclick="document.getElementById('drawer2').open()"> 打开 Drawer </swc-button>
<swc-drawer id="drawer2" title="Drawer标题" hide-title style="z-index: 9000;"></swc-drawer>
```

## 点击遮罩层是否关闭

通过给组件设置`maskClosable`属性来设置点击遮罩层是否关闭本组件

<swc-button type="success" onclick="document.getElementById('drawer3').open()">打开 Drawer</swc-button>
<swc-drawer id="drawer3" title="Drawer标题" hide-title maskClosable="false">
<swc-button type="primary" onclick="document.getElementById('drawer3').close()">关闭 Drawer</swc-button>
</swc-drawer>

```html
<swc-button type="success" onclick="document.getElementById('drawer3').open()">打开 Drawer</swc-button>
<swc-drawer id="drawer3" title="Drawer标题" hide-title maskClosable="false">
    <swc-button type="primary" onclick="document.getElementById('drawer3').close()">关闭 Drawer</swc-button>
</swc-drawer>
```

<script setup>
const click = (className)=>{
    document.getElementById(className).open()
}
</script>
