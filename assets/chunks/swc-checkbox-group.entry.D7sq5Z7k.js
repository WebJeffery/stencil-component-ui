var c=(e,s,a)=>new Promise((l,n)=>{var d=t=>{try{i(a.next(t))}catch(h){n(h)}},r=t=>{try{i(a.throw(t))}catch(h){n(h)}},i=t=>t.done?l(t.value):Promise.resolve(t.value).then(d,r);i((a=a.apply(e,s)).next())});import{r as b,c as u,h as o,H as v,f as p,g}from"./theme.BOCtV-v7.js";import"./framework.DIU08dKJ.js";const k=":host{display:block}",f=k,C=class{constructor(e){b(this,e),this.swcChange=u(this,"swcChange",7),this.disabled=!1,this.value=[]}customChangeHandler(e){this.swcChange.emit(e)}render(){return o(v,{key:"8b7af951e7914450b4bdf0915da2d49236591a4a",disabled:this.disabled,value:this.value},o("slot",{key:"9537a1184e62f250b20e21de8b340aaba4d07bb2"}))}componentWillLoad(){p(this.el,"ivy-checkbox").forEach(s=>{s.checked&&this.value.push(s.getAttribute("value")),this.disabled&&s.setAttribute("disabled","")})}setValue(e){return c(this,null,function*(){this.value.push(e),this.dispatchEventChange(this.value)})}removeValue(e){return c(this,null,function*(){const s=this.value.indexOf(e);s>-1&&(this.value.splice(s,1),this.dispatchEventChange(this.value))})}dispatchEventChange(e){this.swcChange.emit(e)}get el(){return g(this)}};C.style=f;export{C as swc_checkbox_group};
