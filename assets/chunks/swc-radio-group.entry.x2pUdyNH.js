var o=(e,s,a)=>new Promise((h,c)=>{var r=t=>{try{i(a.next(t))}catch(d){c(d)}},l=t=>{try{i(a.throw(t))}catch(d){c(d)}},i=t=>t.done?h(t.value):Promise.resolve(t.value).then(r,l);i((a=a.apply(e,s)).next())});import{r as b,c as f,h as n,H as g,f as u,g as p}from"./theme.DBVOodcl.js";import"./framework.B8ZbuilT.js";const m=":host{display:block}",k=m,y=class{constructor(e){b(this,e),this.changed=f(this,"changed",7),this.value=void 0,this.disabled=!1}customChangeHandler(e){this.changed.emit(e)}render(){return n(g,{key:"a9bdedd4e97a20e6d1e3fdb1703e778904caf589",disabled:this.disabled},n("slot",{key:"bee1a17f4455613e3d4853d75157b9bafc1e835f"}))}componentDidLoad(){u(this.el,"ivy-radio").forEach(s=>{s.getAttribute("checked")&&(this.value=s.getAttribute("value")),this.disabled&&s.setAttribute("disabled","")})}dispatchEventChange(e){return o(this,null,function*(){this.changed.emit(e)})}get el(){return p(this)}};y.style=k;export{y as swc_radio_group};
