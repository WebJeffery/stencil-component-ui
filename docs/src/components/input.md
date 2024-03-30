# Input 输入框

## 基础用法

最常见的用法

<swc-input id="input1" style="width: 224px;" placeholder="请输入"></swc-input>

```html
<swc-input style="width: 224px;" placeholder="请输入"></swc-input>
```

## 禁用状态

通过设置 `disabled` 属性来禁用输入框

<swc-input disabled style="width: 224px;"></swc-input>

```html
<swc-input disabled style="width: 224px;"></swc-input>
```

## 只读状态

通过设置 `readonly` 属性来禁用输入框

<swc-input readonly style="width: 224px;"></swc-input>

```html
<swc-input readonly style="width: 224px;"></swc-input>
```

## 前置图标和后置图标

通过设置 `prefix-icon` 属性来添加前置图标，通过设置 `suffix-icon` 属性来添加后置图标

<swc-input style="width: 224px;" prefix-icon="reading"></swc-input>
&nbsp;
<swc-input style="width: 224px;" suffix-icon="date"></swc-input>
&nbsp;
<swc-input style="width: 224px;" prefix-icon="reading" suffix-icon="date"></swc-input>

```html
<swc-input style="width: 224px;" prefix-icon="reading"></swc-input>
<swc-input style="width: 224px;" suffix-icon="date"></swc-input>
<swc-input style="width: 224px;" prefix-icon="reading" suffix-icon="date"></swc-input>
```

<script setup>
import { onMounted } from 'vue';
onMounted(()=>{
    document.getElementById('input1').addEventListener('change', ev=>{
        console.log(ev, this.value)
    })
})
</script>
