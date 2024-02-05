import{D as g}from"./DashboardLayout-d96027a2.js";import{B as v,O as x,p as n,o as d,c as y,w as c,a as e,l as u,A as k,z as w,e as m,g as B,t as C,F as D,b as f,f as r,i as V}from"./app-00f1f0af.js";import{S as L}from"./sweetalert2-c9babbd4.js";import{C as q}from"./ckeditor-f9579a91.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const U={components:{DashboardLayout:g},data(){return{item:{label:"",body:"",page:""},editor:q,editorConfig:{ckfinder:{uploadUrl:"/dashboard/editor/upload",name:"upload",url:"url"},mediaEmbed:{previewsInData:!0}},sliderPages:[{label:"Каркасные дома",value:"frame.house"},{label:"Погонажные изделия",value:"molded.house"},{label:"Брус",value:"Brus"},{label:"Модульные дома",value:"module"},{label:"Ручная рубка",value:"manual.cutting"},{label:"Пиломатериал",value:"lumber"}]}},mounted(){},methods:{changeImage(l,o){if(l.target.files.length>0){var a=l.target;if(a.files&&a.files[0]){var i=new FileReader;i.onload=t=>{this.item.image=t.target.result},i.readAsDataURL(a.files[0])}}},submit(){v.post(route("faqs.store"),this.item).then(l=>{L.fire({title:"Чаво успешно создан",timer:3e3,timerProgressBar:!0,showConfirmButton:!1,icon:"success",toast:!0,position:"top-end"}),x.visit(route("faqs.index"),{replace:!0})}).catch(l=>{console.log(l.response.data)})}}},E=e("div",{class:"mb-6"},[e("h2",{class:"font-bold text-xl"},"Добавить ЧАВО")],-1),F={class:""},M=e("label",{class:"block",for:""},[r("Вопрос: "),e("span",{class:"text-xl text-red-500"},"*")],-1),N={class:""},P=e("label",{class:"block",for:""},[r("Страница: "),e("span",{class:"text-xl text-red-500"},"*")],-1),A=["value"],I={class:"col-span-2 border-t-2 pt-3"},O=e("label",{class:"block",for:""},[r("Ответь: "),e("span",{class:"text-xl text-red-500"},"*")],-1),R={class:"col-span-2 border-t-2 pt-3"},T={class:"flex items-center justify-end gap-x-3"},j=["href"];function z(l,o,a,i,t,p){const b=n("ckeditor"),_=n("Link"),h=n("DashboardLayout");return d(),y(h,null,{default:c(()=>[E,e("form",{class:"sm:grid sm:grid-cols-2 gap-6",onSubmit:o[3]||(o[3]=V(s=>p.submit(),["prevent"]))},[e("div",F,[M,u(e("input",{type:"text",class:"form-controls",required:"","onUpdate:modelValue":o[0]||(o[0]=s=>t.item.label=s)},null,512),[[k,t.item.label]])]),e("div",N,[P,u(e("select",{class:"form-controls",required:"","onUpdate:modelValue":o[1]||(o[1]=s=>t.item.page=s)},[(d(!0),m(D,null,B(t.sliderPages,s=>(d(),m("option",{key:s.value,value:s.value},C(s.label),9,A))),128))],512),[[w,t.item.page]])]),e("div",I,[O,f(b,{modelValue:t.item.body,"onUpdate:modelValue":o[2]||(o[2]=s=>t.item.body=s),editor:t.editor,config:t.editorConfig},null,8,["modelValue","editor","config"])]),e("div",R,[e("div",T,[f(_,{class:"dash-btn !bg-gray-300 !text-gray-800",href:l.route("faqs.index")},{default:c(()=>[r("Назад")]),_:1},8,["href"]),e("button",{class:"dash-btn",href:l.route("faqs.index")}," Сохранить ",8,j)])])],32)]),_:1})}const W=S(U,[["render",z]]);export{W as default};