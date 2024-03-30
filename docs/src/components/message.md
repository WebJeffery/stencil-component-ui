# Message 全局提示

## 一般用法

<swc-button type="primary" id="btn">显示 Message</swc-button>

<script setup>
import { onMounted } from 'vue';
onMounted(()=>{
    document.getElementById('btn').addEventListener('click', ()=>{
        $ivy.message({content: '这是测试内容'})
    })
})
</script>
