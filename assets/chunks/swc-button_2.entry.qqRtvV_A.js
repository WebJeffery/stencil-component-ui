var e=(o,c,i)=>new Promise((d,a)=>{var u=s=>{try{l(i.next(s))}catch(n){a(n)}},v=s=>{try{l(i.throw(s))}catch(n){a(n)}},l=s=>s.done?d(s.value):Promise.resolve(s.value).then(u,v);l((i=i.apply(o,c)).next())});import{r as b,h as t,H as w}from"./theme.BlE6xyWi.js";import{c as g,u as h}from"./useNamespace-3e147e62.DyAak1PF.js";import"./framework.DIU08dKJ.js";const p='@charset "UTF-8";.swc-button{--swc-button-font-weight:var(--swc-font-weight-primary);--swc-button-border-color:var(--swc-border-color);--swc-button-bg-color:var(--swc-fill-color-blank);--swc-button-text-color:var(--swc-text-color-regular);--swc-button-disabled-text-color:var(--swc-disabled-text-color);--swc-button-disabled-bg-color:var(--swc-fill-color-blank);--swc-button-disabled-border-color:var(--swc-border-color-light);--swc-button-divide-border-color:rgba(255, 255, 255, 0.5);--swc-button-hover-text-color:var(--swc-color-primary);--swc-button-hover-bg-color:var(--swc-color-primary-light-9);--swc-button-hover-border-color:var(--swc-color-primary-light-7);--swc-button-active-text-color:var(--swc-button-hover-text-color);--swc-button-active-border-color:var(--swc-color-primary);--swc-button-active-bg-color:var(--swc-button-hover-bg-color);--swc-button-outline-color:var(--swc-color-primary-light-5);--swc-button-hover-link-text-color:var(--swc-color-info);--swc-button-active-color:var(--swc-text-color-primary)}.swc-button{display:inline-flex;justify-content:center;align-items:center;line-height:1;height:32px;white-space:nowrap;cursor:pointer;color:var(--swc-button-text-color);text-align:center;box-sizing:border-box;outline:none;transition:0.1s;font-weight:var(--swc-button-font-weight);user-select:none;vertical-align:middle;-webkit-appearance:none;background-color:var(--swc-button-bg-color);border:var(--swc-border);border-color:var(--swc-button-border-color);padding:8px 15px;font-size:var(--swc-font-size-base);border-radius:var(--swc-border-radius-base)}.swc-button:hover{color:var(--swc-button-hover-text-color);border-color:var(--swc-button-hover-border-color);background-color:var(--swc-button-hover-bg-color);outline:none}.swc-button:active{color:var(--swc-button-active-text-color);border-color:var(--swc-button-active-border-color);background-color:var(--swc-button-active-bg-color);outline:none}.swc-button:focus-visible{outline:2px solid var(--swc-button-outline-color);outline-offset:1px;transition:outline-offset 0s, outline 0s}.swc-button>span{display:inline-flex;align-items:center}.swc-button+.swc-button{margin-left:12px}.swc-button.is-round{padding:8px 15px}.swc-button::-moz-focus-inner{border:0}.swc-button [class*=swc-icon]+span{margin-left:6px}.swc-button [class*=swc-icon] svg{vertical-align:bottom}.swc-button.is-plain{--swc-button-hover-text-color:var(--swc-color-primary);--swc-button-hover-bg-color:var(--swc-fill-color-blank);--swc-button-hover-border-color:var(--swc-color-primary)}.swc-button.is-active{color:var(--swc-button-active-text-color);border-color:var(--swc-button-active-border-color);background-color:var(--swc-button-active-bg-color);outline:none}.swc-button.is-disabled,.swc-button.is-disabled:hover{color:var(--swc-button-disabled-text-color);cursor:not-allowed;background-image:none;background-color:var(--swc-button-disabled-bg-color);border-color:var(--swc-button-disabled-border-color)}.swc-button.is-loading{position:relative;pointer-events:none}.swc-button.is-loading:before{z-index:1;pointer-events:none;content:"";position:absolute;left:-1px;top:-1px;right:-1px;bottom:-1px;border-radius:inherit;background-color:var(--swc-mask-color-extra-light)}.swc-button.is-round{border-radius:var(--swc-border-radius-round)}.swc-button.is-circle{width:32px;border-radius:50%;padding:8px}.swc-button.is-text{color:var(--swc-button-text-color);border:0 solid transparent;background-color:transparent}.swc-button.is-text.is-disabled{color:var(--swc-button-disabled-text-color);background-color:transparent !important}.swc-button.is-text:not(.is-disabled):hover{background-color:var(--swc-fill-color-light)}.swc-button.is-text:not(.is-disabled):focus-visible{outline:2px solid var(--swc-button-outline-color);outline-offset:1px;transition:outline-offset 0s, outline 0s}.swc-button.is-text:not(.is-disabled):active{background-color:var(--swc-fill-color)}.swc-button.is-text:not(.is-disabled).is-has-bg{background-color:var(--swc-fill-color-light)}.swc-button.is-text:not(.is-disabled).is-has-bg:hover{background-color:var(--swc-fill-color)}.swc-button.is-text:not(.is-disabled).is-has-bg:active{background-color:var(--swc-fill-color-dark)}.swc-button__text--expand{letter-spacing:0.3em;margin-right:-0.3em}.swc-button.is-link{border-color:transparent;color:var(--swc-button-text-color);background:transparent;padding:2px;height:auto}.swc-button.is-link:hover{color:var(--swc-button-hover-link-text-color)}.swc-button.is-link.is-disabled{color:var(--swc-button-disabled-text-color);background-color:transparent !important;border-color:transparent !important}.swc-button.is-link:not(.is-disabled):hover{border-color:transparent;background-color:transparent}.swc-button.is-link:not(.is-disabled):active{color:var(--swc-button-active-color);border-color:transparent;background-color:transparent}.swc-button--text{border-color:transparent;background:transparent;color:var(--swc-color-primary);padding-left:0;padding-right:0}.swc-button--text.is-disabled{color:var(--swc-button-disabled-text-color);background-color:transparent !important;border-color:transparent !important}.swc-button--text:not(.is-disabled):hover{color:var(--swc-color-primary-light-3);border-color:transparent;background-color:transparent}.swc-button--text:not(.is-disabled):active{color:var(--swc-color-primary-dark-2);border-color:transparent;background-color:transparent}.swc-button__link--expand{letter-spacing:0.3em;margin-right:-0.3em}.swc-button--primary{--swc-button-text-color:var(--swc-color-white);--swc-button-bg-color:var(--swc-color-primary);--swc-button-border-color:var(--swc-color-primary);--swc-button-outline-color:var(--swc-color-primary-light-5);--swc-button-active-color:var(--swc-color-primary-dark-2);--swc-button-hover-text-color:var(--swc-color-white);--swc-button-hover-link-text-color:var(--swc-color-primary-light-5);--swc-button-hover-bg-color:var(--swc-color-primary-light-3);--swc-button-hover-border-color:var(--swc-color-primary-light-3);--swc-button-active-bg-color:var(--swc-color-primary-dark-2);--swc-button-active-border-color:var(--swc-color-primary-dark-2);--swc-button-disabled-text-color:var(--swc-color-white);--swc-button-disabled-bg-color:var(--swc-color-primary-light-5);--swc-button-disabled-border-color:var(--swc-color-primary-light-5)}.swc-button--primary.is-plain,.swc-button--primary.is-text,.swc-button--primary.is-link{--swc-button-text-color:var(--swc-color-primary);--swc-button-bg-color:var(--swc-color-primary-light-9);--swc-button-border-color:var(--swc-color-primary-light-5);--swc-button-hover-text-color:var(--swc-color-white);--swc-button-hover-bg-color:var(--swc-color-primary);--swc-button-hover-border-color:var(--swc-color-primary);--swc-button-active-text-color:var(--swc-color-white)}.swc-button--primary.is-plain.is-disabled,.swc-button--primary.is-plain.is-disabled:hover,.swc-button--primary.is-plain.is-disabled:focus,.swc-button--primary.is-plain.is-disabled:active,.swc-button--primary.is-text.is-disabled,.swc-button--primary.is-text.is-disabled:hover,.swc-button--primary.is-text.is-disabled:focus,.swc-button--primary.is-text.is-disabled:active,.swc-button--primary.is-link.is-disabled,.swc-button--primary.is-link.is-disabled:hover,.swc-button--primary.is-link.is-disabled:focus,.swc-button--primary.is-link.is-disabled:active{color:var(--swc-color-primary-light-5);background-color:var(--swc-color-primary-light-9);border-color:var(--swc-color-primary-light-8)}.swc-button--success{--swc-button-text-color:var(--swc-color-white);--swc-button-bg-color:var(--swc-color-success);--swc-button-border-color:var(--swc-color-success);--swc-button-outline-color:var(--swc-color-success-light-5);--swc-button-active-color:var(--swc-color-success-dark-2);--swc-button-hover-text-color:var(--swc-color-white);--swc-button-hover-link-text-color:var(--swc-color-success-light-5);--swc-button-hover-bg-color:var(--swc-color-success-light-3);--swc-button-hover-border-color:var(--swc-color-success-light-3);--swc-button-active-bg-color:var(--swc-color-success-dark-2);--swc-button-active-border-color:var(--swc-color-success-dark-2);--swc-button-disabled-text-color:var(--swc-color-white);--swc-button-disabled-bg-color:var(--swc-color-success-light-5);--swc-button-disabled-border-color:var(--swc-color-success-light-5)}.swc-button--success.is-plain,.swc-button--success.is-text,.swc-button--success.is-link{--swc-button-text-color:var(--swc-color-success);--swc-button-bg-color:var(--swc-color-success-light-9);--swc-button-border-color:var(--swc-color-success-light-5);--swc-button-hover-text-color:var(--swc-color-white);--swc-button-hover-bg-color:var(--swc-color-success);--swc-button-hover-border-color:var(--swc-color-success);--swc-button-active-text-color:var(--swc-color-white)}.swc-button--success.is-plain.is-disabled,.swc-button--success.is-plain.is-disabled:hover,.swc-button--success.is-plain.is-disabled:focus,.swc-button--success.is-plain.is-disabled:active,.swc-button--success.is-text.is-disabled,.swc-button--success.is-text.is-disabled:hover,.swc-button--success.is-text.is-disabled:focus,.swc-button--success.is-text.is-disabled:active,.swc-button--success.is-link.is-disabled,.swc-button--success.is-link.is-disabled:hover,.swc-button--success.is-link.is-disabled:focus,.swc-button--success.is-link.is-disabled:active{color:var(--swc-color-success-light-5);background-color:var(--swc-color-success-light-9);border-color:var(--swc-color-success-light-8)}.swc-button--warning{--swc-button-text-color:var(--swc-color-white);--swc-button-bg-color:var(--swc-color-warning);--swc-button-border-color:var(--swc-color-warning);--swc-button-outline-color:var(--swc-color-warning-light-5);--swc-button-active-color:var(--swc-color-warning-dark-2);--swc-button-hover-text-color:var(--swc-color-white);--swc-button-hover-link-text-color:var(--swc-color-warning-light-5);--swc-button-hover-bg-color:var(--swc-color-warning-light-3);--swc-button-hover-border-color:var(--swc-color-warning-light-3);--swc-button-active-bg-color:var(--swc-color-warning-dark-2);--swc-button-active-border-color:var(--swc-color-warning-dark-2);--swc-button-disabled-text-color:var(--swc-color-white);--swc-button-disabled-bg-color:var(--swc-color-warning-light-5);--swc-button-disabled-border-color:var(--swc-color-warning-light-5)}.swc-button--warning.is-plain,.swc-button--warning.is-text,.swc-button--warning.is-link{--swc-button-text-color:var(--swc-color-warning);--swc-button-bg-color:var(--swc-color-warning-light-9);--swc-button-border-color:var(--swc-color-warning-light-5);--swc-button-hover-text-color:var(--swc-color-white);--swc-button-hover-bg-color:var(--swc-color-warning);--swc-button-hover-border-color:var(--swc-color-warning);--swc-button-active-text-color:var(--swc-color-white)}.swc-button--warning.is-plain.is-disabled,.swc-button--warning.is-plain.is-disabled:hover,.swc-button--warning.is-plain.is-disabled:focus,.swc-button--warning.is-plain.is-disabled:active,.swc-button--warning.is-text.is-disabled,.swc-button--warning.is-text.is-disabled:hover,.swc-button--warning.is-text.is-disabled:focus,.swc-button--warning.is-text.is-disabled:active,.swc-button--warning.is-link.is-disabled,.swc-button--warning.is-link.is-disabled:hover,.swc-button--warning.is-link.is-disabled:focus,.swc-button--warning.is-link.is-disabled:active{color:var(--swc-color-warning-light-5);background-color:var(--swc-color-warning-light-9);border-color:var(--swc-color-warning-light-8)}.swc-button--danger{--swc-button-text-color:var(--swc-color-white);--swc-button-bg-color:var(--swc-color-danger);--swc-button-border-color:var(--swc-color-danger);--swc-button-outline-color:var(--swc-color-danger-light-5);--swc-button-active-color:var(--swc-color-danger-dark-2);--swc-button-hover-text-color:var(--swc-color-white);--swc-button-hover-link-text-color:var(--swc-color-danger-light-5);--swc-button-hover-bg-color:var(--swc-color-danger-light-3);--swc-button-hover-border-color:var(--swc-color-danger-light-3);--swc-button-active-bg-color:var(--swc-color-danger-dark-2);--swc-button-active-border-color:var(--swc-color-danger-dark-2);--swc-button-disabled-text-color:var(--swc-color-white);--swc-button-disabled-bg-color:var(--swc-color-danger-light-5);--swc-button-disabled-border-color:var(--swc-color-danger-light-5)}.swc-button--danger.is-plain,.swc-button--danger.is-text,.swc-button--danger.is-link{--swc-button-text-color:var(--swc-color-danger);--swc-button-bg-color:var(--swc-color-danger-light-9);--swc-button-border-color:var(--swc-color-danger-light-5);--swc-button-hover-text-color:var(--swc-color-white);--swc-button-hover-bg-color:var(--swc-color-danger);--swc-button-hover-border-color:var(--swc-color-danger);--swc-button-active-text-color:var(--swc-color-white)}.swc-button--danger.is-plain.is-disabled,.swc-button--danger.is-plain.is-disabled:hover,.swc-button--danger.is-plain.is-disabled:focus,.swc-button--danger.is-plain.is-disabled:active,.swc-button--danger.is-text.is-disabled,.swc-button--danger.is-text.is-disabled:hover,.swc-button--danger.is-text.is-disabled:focus,.swc-button--danger.is-text.is-disabled:active,.swc-button--danger.is-link.is-disabled,.swc-button--danger.is-link.is-disabled:hover,.swc-button--danger.is-link.is-disabled:focus,.swc-button--danger.is-link.is-disabled:active{color:var(--swc-color-danger-light-5);background-color:var(--swc-color-danger-light-9);border-color:var(--swc-color-danger-light-8)}.swc-button--info{--swc-button-text-color:var(--swc-color-white);--swc-button-bg-color:var(--swc-color-info);--swc-button-border-color:var(--swc-color-info);--swc-button-outline-color:var(--swc-color-info-light-5);--swc-button-active-color:var(--swc-color-info-dark-2);--swc-button-hover-text-color:var(--swc-color-white);--swc-button-hover-link-text-color:var(--swc-color-info-light-5);--swc-button-hover-bg-color:var(--swc-color-info-light-3);--swc-button-hover-border-color:var(--swc-color-info-light-3);--swc-button-active-bg-color:var(--swc-color-info-dark-2);--swc-button-active-border-color:var(--swc-color-info-dark-2);--swc-button-disabled-text-color:var(--swc-color-white);--swc-button-disabled-bg-color:var(--swc-color-info-light-5);--swc-button-disabled-border-color:var(--swc-color-info-light-5)}.swc-button--info.is-plain,.swc-button--info.is-text,.swc-button--info.is-link{--swc-button-text-color:var(--swc-color-info);--swc-button-bg-color:var(--swc-color-info-light-9);--swc-button-border-color:var(--swc-color-info-light-5);--swc-button-hover-text-color:var(--swc-color-white);--swc-button-hover-bg-color:var(--swc-color-info);--swc-button-hover-border-color:var(--swc-color-info);--swc-button-active-text-color:var(--swc-color-white)}.swc-button--info.is-plain.is-disabled,.swc-button--info.is-plain.is-disabled:hover,.swc-button--info.is-plain.is-disabled:focus,.swc-button--info.is-plain.is-disabled:active,.swc-button--info.is-text.is-disabled,.swc-button--info.is-text.is-disabled:hover,.swc-button--info.is-text.is-disabled:focus,.swc-button--info.is-text.is-disabled:active,.swc-button--info.is-link.is-disabled,.swc-button--info.is-link.is-disabled:hover,.swc-button--info.is-link.is-disabled:focus,.swc-button--info.is-link.is-disabled:active{color:var(--swc-color-info-light-5);background-color:var(--swc-color-info-light-9);border-color:var(--swc-color-info-light-8)}.swc-button--large{--swc-button-size:40px;height:var(--swc-button-size);padding:12px 19px;font-size:var(--swc-font-size-base);border-radius:var(--swc-border-radius-base)}.swc-button--large [class*=swc-icon]+span{margin-left:8px}.swc-button--large.is-round{padding:12px 19px}.swc-button--large.is-circle{width:var(--swc-button-size);padding:12px}.swc-button--small{--swc-button-size:24px;height:var(--swc-button-size);padding:5px 11px;font-size:12px;border-radius:calc(var(--swc-border-radius-base) - 1px)}.swc-button--small [class*=swc-icon]+span{margin-left:4px}.swc-button--small.is-round{padding:5px 11px}.swc-button--small.is-circle{width:var(--swc-button-size);padding:5px}',x=p,r=h("button"),f=class{constructor(o){b(this,o),this.type="default",this.plain=!1,this.size="",this.round=!1,this.loading=!1,this.disabled=!1,this.circle=!1,this.link=!1,this.text=!1,this.bg=!1}render(){return t(w,{key:"53b1791509442d37e66b1ff9485275206d0e9cd3",type:this.type,loading:this.loading,round:this.round,plain:this.plain,class:g(r.b(),r.m(this.type),r.m(this.size),r.is("disabled",this.disabled),r.is("loading",this.loading),r.is("plain",this.plain),r.is("round",this.round),r.is("circle",this.circle),r.is("link",this.link),r.is("text",this.text),r.is("has-bg",this.bg))},t("slot",{key:"1ac5c82df3f44653b81c432b0b09d9b4f5852676",name:"icon"}),t("span",{key:"a8434ce82b86571e823be312195333f617d3a5ae",class:"ivy-button-inner"},t("slot",{key:"73dc1d475c6fdc982185f5a5c62c0385355a8488"})))}};f.style=x;const k=":host{display:block}table{border-collapse:collapse}.table-cell{padding:4px 8px;text-align:center}:host([border]) .table-cell{border:1px solid var(--ivy-table-border-color, #e0e0e0)}",m=k,y=class{constructor(o){b(this,o),this.border=!1,this.columns=[],this.rows=[]}render(){return t(w,{key:"21bb2d97c549edfa55abf0fc047f8786f9dac6ca",border:this.border},t("table",{key:"7435b267527dd8a0647fdd2d771b748f40a6f22a"},t("thead",{key:"0387e312a8d48bfa0c6018d183867c37f8c285f4"},t("tr",{key:"b71c8fb842a9021a373cb3cde1b88fc8972e33f3"},this.columns.map((o,c)=>t("th",{class:`table-cell table-cell-th table-col-${c}`},o.title)))),t("tbody",{key:"ecc67e39ba3794821a1141729fefdb686090c359"},this.rows.length>0?this.rows.map(o=>t("tr",null,this.columns.map((c,i)=>t("td",{class:`table-cell table-col-${i}`},o[c.prop])))):t("tr",null,t("td",{colSpan:this.columns.length,class:"table-cell table-cell-empty"},"暂无数据")))))}transferColumns(o){return o.map(c=>({title:c.title||null,prop:c.prop||null,width:c.width||null}))}setColumns(o){return e(this,null,function*(){this.columns=this.transferColumns(o)})}setData(o){return e(this,null,function*(){this.rows=o})}};y.style=m;export{f as swc_button,y as swc_table};