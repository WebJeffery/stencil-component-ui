# Notification 通知

<swc-button @click="test">点击打开Notification</swc-button>

```html
<swc-button>点击打开Notification</swc-button>
```

<script>
export default {
    setup(){
        const test = (ev)=>{
            console.log(window)
        }
        return {test}
    }
}

</script>
