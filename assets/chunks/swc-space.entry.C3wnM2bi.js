import{r as t,h as i,H as s,g as a}from"./theme.B7V_yWaD.js";import"./framework.DIU08dKJ.js";const n=":host{display:inline-block}.hide{display:none}.inner{display:flex;align-items:var(--ivy-space-alignment, center);flex-wrap:var(--ivy-space-wrap, nowrap)}:host([direction='horizontal']) .item+.item{margin-left:var(--ivy-space-size, 12px)}:host([direction='vertical']) .inner{flex-direction:column}:host([direction='vertical']) .item+.item{margin-top:var(--ivy-space-size, 12px)}",r=n,o=class{constructor(e){t(this,e),this.slotList=[],this.direction="horizontal"}render(){return i(s,{key:"1eb8b86152ded594873977c98340e062af80f5a9",direction:this.direction},i("div",{key:"4e8924e6f12681712f28df728e31b254fcf1e590",class:"inner"},this.slotList.map(e=>i("div",{class:"item",innerHTML:e}))),i("div",{key:"19ad4f95ce25e7872744064ad5144a64d68cc4c9",class:"hide"},i("slot",{key:"35e7444d6f75237fc0b4e8c80bbb2d7ce138bb80",ref:e=>this.wrap=e})))}componentWillLoad(){this.el.childNodes.forEach(e=>{e.nodeType===1?this.slotList.push(e.outerHTML):e.nodeType===3&&!/^\s+$/.test(e.nodeValue)&&this.slotList.push(e.nodeValue)})}get el(){return a(this)}};o.style=r;export{o as swc_space};