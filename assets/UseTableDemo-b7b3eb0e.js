import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-beca184b.js";import{d as t,q as a,I as l,r as o,o as i,c as s,g as n,w as r,a as m,B as p,t as d,e as c,F as u,k as b}from"./index-265c8816.js";import{_ as g}from"./Table.vue_vue_type_script_lang-e827b5f4.js";import{g as f}from"./index-0223a97e.js";import{E as D}from"./el-tag-ce3fa640.js";import{E as _}from"./el-button-8efbb03b.js";import{u as v}from"./useTable-c3768ba9.js";import"./el-card-bbce6fb6.js";import"./el-popper-217eded4.js";import"./constants-29b22d5c.js";import"./tsxHelper-65283664.js";import"./event-5568c9d8.js";import"./use-form-common-props-b0506b93.js";import"./use-form-item-d7f95cb7.js";import"./el-input-e5756c90.js";import"./scroll-089aed15.js";import"./debounce-d3af305e.js";import"./validator-836aa37c.js";import"./el-message-box-d85a115b.js";import"./el-overlay-704c0332.js";import"./vnode-772c0587.js";import"./aria-ecee1d93.js";const j={class:"ml-30px"},x={class:"ml-30px"},h=t({__name:"UseTableDemo",setup(t){const{register:h,tableObject:y,methods:C,elTableRef:k}=v({getListApi:f,response:{list:"list",total:"total"}}),{getList:w}=C;w();const{register:P,tableObject:S,methods:T}=v({getListApi:f,response:{list:"list",total:"total"}}),{getList:z}=T;z();const{t:U}=b(),R=a([{field:"index",label:U("tableDemo.index"),type:"index"},{field:"content",label:U("tableDemo.header"),children:[{field:"title",label:U("tableDemo.title")},{field:"author",label:U("tableDemo.author")},{field:"display_time",label:U("tableDemo.displayTime")},{field:"importance",label:U("tableDemo.importance"),formatter:(e,t,a)=>l(D,{type:1===a?"success":2===a?"warning":"danger"},(()=>U(1===a?"tableDemo.important":2===a?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:U("tableDemo.pageviews")}]},{field:"action",label:U("tableDemo.action")}]),L=o(),$=e=>{L.value=e?{total:y.total}:void 0},A=e=>{const{setProps:t}=C;t({reserveIndex:e})},E=e=>{const{setProps:t}=C;t({selection:e})},I=o(1),q=()=>{const{setColumn:e}=C;e([{field:"title",path:"label",value:`${U("tableDemo.title")}${m(I)}`}]),I.value++},O=e=>{const{setProps:t}=C;t({expand:e})},W=()=>{var e;null==(e=m(k))||e.toggleAllSelection()};return(t,a)=>(i(),s(u,null,[n(m(e),{title:`UseTable ${m(U)("tableDemo.operate")}`},{default:r((()=>[n(m(_),{onClick:a[0]||(a[0]=e=>$(!0))},{default:r((()=>[p(d(m(U)("tableDemo.show"))+" "+d(m(U)("tableDemo.pagination")),1)])),_:1}),n(m(_),{onClick:a[1]||(a[1]=e=>$(!1))},{default:r((()=>[p(d(m(U)("tableDemo.hidden"))+" "+d(m(U)("tableDemo.pagination")),1)])),_:1}),n(m(_),{onClick:a[2]||(a[2]=e=>A(!0))},{default:r((()=>[p(d(m(U)("tableDemo.reserveIndex")),1)])),_:1}),n(m(_),{onClick:a[3]||(a[3]=e=>A(!1))},{default:r((()=>[p(d(m(U)("tableDemo.restoreIndex")),1)])),_:1}),n(m(_),{onClick:a[4]||(a[4]=e=>E(!0))},{default:r((()=>[p(d(m(U)("tableDemo.showSelections")),1)])),_:1}),n(m(_),{onClick:a[5]||(a[5]=e=>E(!1))},{default:r((()=>[p(d(m(U)("tableDemo.hiddenSelections")),1)])),_:1}),n(m(_),{onClick:q},{default:r((()=>[p(d(m(U)("tableDemo.changeTitle")),1)])),_:1}),n(m(_),{onClick:a[6]||(a[6]=e=>O(!0))},{default:r((()=>[p(d(m(U)("tableDemo.showExpandedRows")),1)])),_:1}),n(m(_),{onClick:a[7]||(a[7]=e=>O(!1))},{default:r((()=>[p(d(m(U)("tableDemo.hiddenExpandedRows")),1)])),_:1}),n(m(_),{onClick:W},{default:r((()=>[p(d(m(U)("tableDemo.selectAllNone")),1)])),_:1})])),_:1},8,["title"]),n(m(e),{title:`UseTable ${m(U)("tableDemo.example")}`},{default:r((()=>[n(m(g),{pageSize:m(y).pageSize,"onUpdate:pageSize":a[8]||(a[8]=e=>m(y).pageSize=e),currentPage:m(y).currentPage,"onUpdate:currentPage":a[9]||(a[9]=e=>m(y).currentPage=e),columns:R,data:m(y).tableList,loading:m(y).loading,pagination:L.value,onRegister:m(h)},{action:r((e=>[n(m(_),{type:"primary",onClick:e=>{}},{default:r((()=>[p(d(m(U)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),expand:r((e=>[c("div",j,[c("div",null,d(m(U)("tableDemo.title"))+"："+d(e.row.title),1),c("div",null,d(m(U)("tableDemo.author"))+"："+d(e.row.author),1),c("div",null,d(m(U)("tableDemo.displayTime"))+"："+d(e.row.display_time),1)])])),_:1},8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1},8,["title"]),n(m(e),{title:`UseTable 2 ${m(U)("tableDemo.example")}`},{default:r((()=>[n(m(g),{pageSize:m(S).pageSize,"onUpdate:pageSize":a[10]||(a[10]=e=>m(S).pageSize=e),currentPage:m(S).currentPage,"onUpdate:currentPage":a[11]||(a[11]=e=>m(S).currentPage=e),columns:R,data:m(S).tableList,loading:m(S).loading,pagination:L.value,onRegister:m(P)},{action:r((e=>[n(m(_),{type:"primary",onClick:e=>{}},{default:r((()=>[p(d(m(U)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),expand:r((e=>[c("div",x,[c("div",null,d(m(U)("tableDemo.title"))+"："+d(e.row.title),1),c("div",null,d(m(U)("tableDemo.author"))+"："+d(e.row.author),1),c("div",null,d(m(U)("tableDemo.displayTime"))+"："+d(e.row.display_time),1)])])),_:1},8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1},8,["title"])],64))}});export{h as default};
