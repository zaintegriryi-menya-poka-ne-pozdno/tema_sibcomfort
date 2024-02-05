import{D as y}from"./DashboardLayout-d96027a2.js";import{B as g,O as w,p as C,o as n,c as k,w as V,a as t,e as r,g as x,l as p,A as m,F as b,n as M,t as f,f as d,i as z}from"./app-00f1f0af.js";import{C as B}from"./vue-select-954840c9.js";import{S as D}from"./sweetalert2-c9babbd4.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";const U={components:{DashboardLayout:y,vSelect:B},props:{contact:{type:Object,default:{}}},data(){return{item:{phone:"",email:"",adress:""},loading:[!1,!1,!1,!1,!1]}},mounted(){this.item=this.contact.data},methods:{submit(){g.put(route("contacts.update",1),this.item).then(l=>{D.fire({title:"Контакты успешно обновлени",timer:3e3,timerProgressBar:!0,showConfirmButton:!1,icon:"success",toast:!0,position:"top-end"}),w.visit(route("dashboard"),{replace:!0})}).catch(l=>{console.log(l.response.data)})},changeFile(l,c,i){if(l.target.files.length>0){const h=new FormData;h.append("pdf_file",l.target.files[0]),this.loading[i]=!0,g.post(route("upload.file"),h).then(s=>{c.file=s.data.file}).catch(s=>{}).finally(()=>{this.loading[i]=!1})}}}},F={class:"flex flex-col"},S=t("h2",{class:"font-bold text-xl my-8"},[d(" Дополнителная информация"),t("span",{class:"text-xs text-gray-500"}," - ( директор пск сибкомфорт )")],-1),O={class:"sm:grid grid-cols-3 gap-6"},j={class:""},q=t("label",{class:"block",for:""},"Число:",-1),H=["onUpdate:modelValue"],N={class:""},T=t("label",{class:"block",for:""},[d("Заголовок "),t("span",{class:"text-xs text-gray-500"},"( Построиных домов )")],-1),A=["onUpdate:modelValue"],E={class:""},I=t("label",{class:"block",for:""},[d("Описание "),t("span",{class:"text-xs text-gray-500"},"( Построиных домов )")],-1),P=["onUpdate:modelValue"],G={class:"block leading-6 text-gray-900 font-medium"},J={class:"mt-2 flex items-center gap-x-3"},K=t("svg",{height:"28",width:"28",version:"1.1",id:"_x32_",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512","xml:space":"preserve"},[t("g",null,[t("path",{class:"st0",d:`M378.413,0H208.297h-13.182L185.8,9.314L57.02,138.102l-9.314,9.314v13.176v265.514
		c0,47.36,38.528,85.895,85.896,85.895h244.811c47.353,0,85.881-38.535,85.881-85.895V85.896C464.294,38.528,425.766,0,378.413,0z
		 M432.497,426.105c0,29.877-24.214,54.091-54.084,54.091H133.602c-29.884,0-54.098-24.214-54.098-54.091V160.591h83.716
		c24.885,0,45.077-20.178,45.077-45.07V31.804h170.116c29.87,0,54.084,24.214,54.084,54.092V426.105z`}),t("path",{class:"st0",d:`M171.947,252.785h-28.529c-5.432,0-8.686,3.533-8.686,8.825v73.754c0,6.388,4.204,10.599,10.041,10.599
		c5.711,0,9.914-4.21,9.914-10.599v-22.406c0-0.545,0.279-0.817,0.824-0.817h16.436c20.095,0,32.188-12.226,32.188-29.612
		C204.136,264.871,192.182,252.785,171.947,252.785z M170.719,294.888h-15.208c-0.545,0-0.824-0.272-0.824-0.81v-23.23
		c0-0.545,0.279-0.816,0.824-0.816h15.208c8.42,0,13.447,5.027,13.447,12.498C184.167,290,179.139,294.888,170.719,294.888z`}),t("path",{class:"st0",d:`M250.191,252.785h-21.868c-5.432,0-8.686,3.533-8.686,8.825v74.843c0,5.3,3.253,8.693,8.686,8.693h21.868
		c19.69,0,31.923-6.249,36.81-21.324c1.76-5.3,2.723-11.681,2.723-24.857c0-13.175-0.964-19.557-2.723-24.856
		C282.113,259.034,269.881,252.785,250.191,252.785z M267.856,316.896c-2.318,7.331-8.965,10.459-18.21,10.459h-9.23
		c-0.545,0-0.824-0.272-0.824-0.816v-55.146c0-0.545,0.279-0.817,0.824-0.817h9.23c9.245,0,15.892,3.128,18.21,10.46
		c0.95,3.128,1.62,8.56,1.62,17.93C269.476,308.336,268.805,313.768,267.856,316.896z`}),t("path",{class:"st0",d:`M361.167,252.785h-44.812c-5.432,0-8.7,3.533-8.7,8.825v73.754c0,6.388,4.218,10.599,10.055,10.599
		c5.697,0,9.914-4.21,9.914-10.599v-26.351c0-0.538,0.265-0.81,0.81-0.81h26.086c5.837,0,9.23-3.532,9.23-8.56
		c0-5.028-3.393-8.553-9.23-8.553h-26.086c-0.545,0-0.81-0.272-0.81-0.817v-19.425c0-0.545,0.265-0.816,0.81-0.816h32.733
		c5.572,0,9.245-3.666,9.245-8.553C370.411,256.45,366.738,252.785,361.167,252.785z`})])],-1),Q=["for"],R=["id","onChange"],W=["href"],X={class:"col-span-2 border-t-2 pt-3 mt-6"},Y={class:"flex items-center justify-end gap-x-3"},Z=["disabled"];function $(l,c,i,h,s,_){const v=C("DashboardLayout");return n(),k(v,null,{default:V(()=>{var u;return[t("form",{class:"gap-6",onSubmit:c[0]||(c[0]=z(e=>_.submit(),["prevent"]))},[t("div",F,[S,(n(!0),r(b,null,x(s.item.building,(e,o)=>(n(),r("div",{key:o,class:"pb-3 pt-2 border-b border-gray-300"},[t("div",O,[t("div",j,[q,p(t("input",{type:"text",class:"form-controls",required:"","onUpdate:modelValue":a=>e.count=a},null,8,H),[[m,e.count]])]),t("div",N,[T,p(t("input",{type:"text",class:"form-controls",required:"","onUpdate:modelValue":a=>e.title=a},null,8,A),[[m,e.title]])]),t("div",E,[I,p(t("textarea",{type:"text",class:"form-controls","onUpdate:modelValue":a=>e.description=a},null,8,P),[[m,e.description]])])])]))),128)),t("div",null,[(n(!0),r(b,null,x(s.item.files,(e,o)=>(n(),r("div",{key:o,class:M(["col-span-full pb-3 pt-2",{"border-b":o!==s.item.files.length-1}])},[t("div",G,f(e.label),1),t("div",J,[K,t("label",{for:`file_${o}`,type:"button",class:"rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"},f(s.loading[o]?"Загрузка на сервер":"Сменить"),9,Q),t("input",{type:"file",class:"hidden",id:`file_${o}`,accept:"application/pdf",onChange:a=>_.changeFile(a,e,o)},null,40,R),t("a",{href:e.file,target:"_blank",class:"rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"}," Открыть ",8,W)])],2))),128))])]),t("div",X,[d(" Последнее изменение: "+f((u=i.contact.admin)==null?void 0:u.name)+" ",1),t("div",Y,[t("button",{class:"dash-btn disabled:bg-gray-400",disabled:s.loading.filter(e=>e).length>0}," Сохранить ",8,Z)])])],32)]}),_:1})}const lt=L(U,[["render",$]]);export{lt as default};
