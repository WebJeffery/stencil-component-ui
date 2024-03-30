# Switch 开关

## 基础用法

通过`checked`设置是否开启

<swc-switch checked></swc-switch>

```html
<swc-switch checked></swc-switch>
```

## 禁止点击

通过设置 `disabled` 属性来禁止点击

<swc-switch disabled></swc-switch>

<swc-switch checked disabled></swc-switch>

```html
<swc-switch disabled></swc-switch>

<swc-switch checked disabled></swc-switch>
```

## change 事件

通过判断 `switch` 组件是否拥有 `checked` 属性来判断是否被选中

<swc-switch checked id="switchChange"></swc-switch>

```html
<swc-switch checked id="switchChange"></swc-switch>
```

<script setup>
import { onMounted } from 'vue';

onMounted(()=>{
    document.getElementById('switchChange').addEventListener('change', ev=>{
        console.log(ev.detail)
    })
})

</script>
