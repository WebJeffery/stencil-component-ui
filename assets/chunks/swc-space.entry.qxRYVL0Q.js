import{r as t,h as i,H as s,g as a}from"./theme.CN6nmgZd.js";import"./framework.DIU08dKJ.js";const n=":host{display:inline-block}.hide{display:none}.inner{display:flex;align-items:var(--ivy-space-alignment, center);flex-wrap:var(--ivy-space-wrap, nowrap)}:host([direction='horizontal']) .item+.item{margin-left:var(--ivy-space-size, 12px)}:host([direction='vertical']) .inner{flex-direction:column}:host([direction='vertical']) .item+.item{margin-top:var(--ivy-space-size, 12px)}",r=n,o=class{constructor(e){t(this,e),this.slotList=[],this.direction="horizontal"}render(){return i(s,{key:"ed0e59e74355213480278bb71bfc9b0612fa27cf",direction:this.direction},i("div",{key:"e0b715f7d51feff669a92d832207706e1ef0f16b",class:"inner"},this.slotList.map(e=>i("div",{class:"item",innerHTML:e}))),i("div",{key:"a0f8e7c81fcbda26e27bebccb714db85587dd287",class:"hide"},i("slot",{key:"11454da9590267243593df99b5416661e2829c4f",ref:e=>this.wrap=e})))}componentWillLoad(){this.el.childNodes.forEach(e=>{e.nodeType===1?this.slotList.push(e.outerHTML):e.nodeType===3&&!/^\s+$/.test(e.nodeValue)&&this.slotList.push(e.nodeValue)})}get el(){return a(this)}};o.style=r;export{o as swc_space};
