import{b4 as e,K as a,bk as t,N as n,d as l,R as r,S as u,r as s,q as o,x as i,bo as m,X as d,E as c,b5 as p,o as b,c as v,a8 as f,a as N,n as y,bf as I,g,w as h,h as V,aH as x,co as S,$ as E,G as w,bn as k,cp as A,_ as F,ac as _,b1 as K,b2 as j,ag as B}from"./index-265c8816.js";import{E as T}from"./el-input-e5756c90.js";import{C as M,I as O,U as C}from"./event-5568c9d8.js";import{i as $}from"./el-popper-217eded4.js";import{u as z}from"./use-form-item-d7f95cb7.js";import{u as P,a as Y}from"./use-form-common-props-b0506b93.js";const G=100,L=600,X={beforeMount(a,t){const n=t.value,{interval:l=G,delay:r=L}=e(n)?{}:n;let u,s;const o=()=>e(n)?n():n.handler(),i=()=>{s&&(clearTimeout(s),s=void 0),u&&(clearInterval(u),u=void 0)};a.addEventListener("mousedown",(e=>{0===e.button&&(i(),o(),document.addEventListener("mouseup",(()=>i()),{once:!0}),s=setTimeout((()=>{u=setInterval((()=>{o()}),l)}),r))}))}},q=a({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:t,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:e=>null===e||n(e)||["min","max"].includes(e),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:e=>e>=0&&e===Number.parseInt(`${e}`,10)},validateEvent:{type:Boolean,default:!0}}),D={[M]:(e,a)=>a!==e,blur:e=>e instanceof FocusEvent,focus:e=>e instanceof FocusEvent,[O]:e=>n(e)||$(e),[C]:e=>n(e)||$(e)},H=["aria-label","onKeydown"],R=["aria-label","onKeydown"],U=l({name:"ElInputNumber"});const W=B(_(l({...U,props:q,emits:D,setup(e,{expose:a,emit:t}){const l=e,{t:_}=r(),B=u("input-number"),G=s(),L=o({currentValue:l.modelValue,userInput:null}),{formItem:q}=z(),D=i((()=>n(l.modelValue)&&l.modelValue<=l.min)),U=i((()=>n(l.modelValue)&&l.modelValue>=l.max)),W=i((()=>{const e=te(l.step);return m(l.precision)?Math.max(te(l.modelValue),e):(l.precision,l.precision)})),Z=i((()=>l.controls&&"right"===l.controlsPosition)),J=P(),Q=Y(),ee=i((()=>{if(null!==L.userInput)return L.userInput;let e=L.currentValue;if($(e))return"";if(n(e)){if(Number.isNaN(e))return"";m(l.precision)||(e=e.toFixed(l.precision))}return e})),ae=(e,a)=>{if(m(a)&&(a=W.value),0===a)return Math.round(e);let t=String(e);const n=t.indexOf(".");if(-1===n)return e;if(!t.replace(".","").split("")[n+a])return e;const l=t.length;return"5"===t.charAt(l-1)&&(t=`${t.slice(0,Math.max(0,l-1))}6`),Number.parseFloat(Number(t).toFixed(a))},te=e=>{if($(e))return 0;const a=e.toString(),t=a.indexOf(".");let n=0;return-1!==t&&(n=a.length-t-1),n},ne=(e,a=1)=>n(e)?ae(e+l.step*a):L.currentValue,le=()=>{if(l.readonly||Q.value||U.value)return;const e=Number(ee.value)||0,a=ne(e);se(a),t(O,L.currentValue)},re=()=>{if(l.readonly||Q.value||D.value)return;const e=Number(ee.value)||0,a=ne(e,-1);se(a),t(O,L.currentValue)},ue=(e,a)=>{const{max:n,min:r,step:u,precision:s,stepStrictly:o,valueOnClear:i}=l;let d=Number(e);if($(e)||Number.isNaN(d))return null;if(""===e){if(null===i)return null;d=K(i)?{min:r,max:n}[i]:i}return o&&(d=ae(Math.round(d/u)*u,s)),m(s)||(d=ae(d,s)),(d>n||d<r)&&(d=d>n?n:r,a&&t(C,d)),d},se=(e,a=!0)=>{var n;const r=L.currentValue,u=ue(e);a?r!==u&&(L.userInput=null,t(C,u),t(M,u,r),l.validateEvent&&(null==(n=null==q?void 0:q.validate)||n.call(q,"change").catch((e=>j()))),L.currentValue=u):t(C,u)},oe=e=>{L.userInput=e;const a=""===e?null:Number(e);t(O,a),se(a,!1)},ie=e=>{const a=""!==e?Number(e):"";(n(a)&&!Number.isNaN(a)||""===e)&&se(a),L.userInput=null},me=e=>{t("focus",e)},de=e=>{var a;t("blur",e),l.validateEvent&&(null==(a=null==q?void 0:q.validate)||a.call(q,"blur").catch((e=>j())))};return d((()=>l.modelValue),(e=>{const a=ue(L.userInput),t=ue(e,!0);n(a)||a&&a===t||(L.currentValue=t,L.userInput=null)}),{immediate:!0}),c((()=>{var e;const{min:a,max:r,modelValue:u}=l,s=null==(e=G.value)?void 0:e.input;if(s.setAttribute("role","spinbutton"),Number.isFinite(r)?s.setAttribute("aria-valuemax",String(r)):s.removeAttribute("aria-valuemax"),Number.isFinite(a)?s.setAttribute("aria-valuemin",String(a)):s.removeAttribute("aria-valuemin"),s.setAttribute("aria-valuenow",String(L.currentValue)),s.setAttribute("aria-disabled",String(Q.value)),!n(u)&&null!=u){let e=Number(u);Number.isNaN(e)&&(e=null),t(C,e)}})),p((()=>{var e;const a=null==(e=G.value)?void 0:e.input;null==a||a.setAttribute("aria-valuenow",`${L.currentValue}`)})),a({focus:()=>{var e,a;null==(a=null==(e=G.value)?void 0:e.focus)||a.call(e)},blur:()=>{var e,a;null==(a=null==(e=G.value)?void 0:e.blur)||a.call(e)}}),(e,a)=>(b(),v("div",{class:y([N(B).b(),N(B).m(N(J)),N(B).is("disabled",N(Q)),N(B).is("without-controls",!e.controls),N(B).is("controls-right",N(Z))]),onDragstart:a[1]||(a[1]=F((()=>{}),["prevent"]))},[e.controls?f((b(),v("span",{key:0,role:"button","aria-label":N(_)("el.inputNumber.decrease"),class:y([N(B).e("decrease"),N(B).is("disabled",N(D))]),onKeydown:I(re,["enter"])},[g(N(E),null,{default:h((()=>[N(Z)?(b(),V(N(x),{key:0})):(b(),V(N(S),{key:1}))])),_:1})],42,H)),[[N(X),re]]):w("v-if",!0),e.controls?f((b(),v("span",{key:1,role:"button","aria-label":N(_)("el.inputNumber.increase"),class:y([N(B).e("increase"),N(B).is("disabled",N(U))]),onKeydown:I(le,["enter"])},[g(N(E),null,{default:h((()=>[N(Z)?(b(),V(N(k),{key:0})):(b(),V(N(A),{key:1}))])),_:1})],42,R)),[[N(X),le]]):w("v-if",!0),g(N(T),{id:e.id,ref_key:"input",ref:G,type:"number",step:e.step,"model-value":N(ee),placeholder:e.placeholder,readonly:e.readonly,disabled:N(Q),size:N(J),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:a[0]||(a[0]=F((()=>{}),["prevent"])),onKeydown:[I(F(le,["prevent"]),["up"]),I(F(re,["prevent"]),["down"])],onBlur:de,onFocus:me,onInput:oe,onChange:ie},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]));export{W as E,X as v};
