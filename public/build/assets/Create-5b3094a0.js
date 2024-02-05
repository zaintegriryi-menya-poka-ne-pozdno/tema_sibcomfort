import{D as k}from"./DashboardLayout-d96027a2.js";import{B as w,O as V,p as u,o as i,c as A,w as n,a as e,l as b,A as g,b as c,s as h,C as f,e as r,g as z,t as C,F as q,f as j,i as B}from"./app-00f1f0af.js";import{C as U}from"./vue-select-954840c9.js";import{S as M}from"./sweetalert2-c9babbd4.js";import{C as L}from"./ckeditor-f9579a91.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";const D={components:{DashboardLayout:k,vSelect:U},props:{categories:{type:Array,default:{}},buildTypes:{type:Array,default:{}}},data(){return{item:{name:"",image_top:"",image_middle:"",image_bottom:"",body:"",status:"",size_from:"",size_to:"",floor:"",category_id:"",build_type_id:"",type:"building"},types:[{label:"Проекты",value:"building"},{label:"Готовые объекты",value:"ready"}],editor:L,editorConfig:{ckfinder:{uploadUrl:"/dashboard/editor/upload",name:"upload",url:"url"},mediaEmbed:{previewsInData:!0}},floors:[]}},mounted(){for(var l=1;l<=20;l++)this.floors.push(l)},methods:{changeImage(l,s){if(l.target.files.length>0){var d=l.target;if(d.files&&d.files[0]){var _=new FileReader;_.onload=t=>{this.item[s]=t.target.result},_.readAsDataURL(d.files[0])}}},submit(){w.post(route("projects.store"),this.item).then(l=>{M.fire({title:"Проект успешно создан",timer:3e3,timerProgressBar:!0,showConfirmButton:!1,icon:"success",toast:!0,position:"top-end"}),V.visit(route("projects.index"),{replace:!0})}).catch(l=>{console.log(l.response.data)})}}},I=e("div",{class:"mb-6"},[e("h2",{class:"font-bold text-xl"},"Добавить проект")],-1),P={class:""},F=e("label",{class:"block",for:""},"Название :",-1),N={class:""},S=e("label",{class:"block",for:""},"Материал:",-1),H=["required"],T={class:""},E=e("label",{class:"block",for:""},"Тип стройки:",-1),J=["required"],O={class:""},R=e("label",{class:"block",for:""},"Этаж:",-1),K=["required"],Q={class:""},W=e("label",{class:"block",for:""},"Тип:",-1),X={name:"",class:"form-controls",id:"",required:""},Y=["value"],Z={class:"grid sm:grid-cols-2 items-center gap-x-4"},$={class:""},ee=e("label",{class:"block",for:""},"Размер с:",-1),te={class:""},oe=e("label",{class:"block",for:""},"Размер до:",-1),se={class:"col-span-2 border-t-2 pt-3"},le=e("label",{class:"block",for:""},"Описание:",-1),ie={class:"col-span-2 border-t-2 pt-3"},re=e("label",{class:"block",for:"image_top"}," Изображение: ",-1),de=["required"],ae={for:"image_top",class:"cursor-pointer"},ne={key:0,class:"relative group"},ce=["src"],me=e("div",{class:"group-hover:flex hidden absolute right-0 left-0 bottom-0 top-0 bg-black bg-opacity-50 z-20 items-center justify-center rounded-lg"},[e("span",{class:"inline-block border-2 rounded-lg px-4 py-3 font-bold text-sm text-white"},"Изменить")],-1),ue={key:1,class:"mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"},_e=e("div",{class:"text-center"},[e("svg",{class:"mx-auto h-12 w-12 text-gray-300",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z","clip-rule":"evenodd"})]),e("div",{class:"mt-4 flex text-sm leading-6 text-indigo-600 tex"},[e("p",{class:"pl-1"}," Upload a file. PNG, JPG, GIF up to 10MB ")])],-1),pe=[_e],be={class:"col-span-2 border-t-2 pt-3"},ge=e("label",{class:"block",for:"image_middle"}," Изображение: ",-1),he=["required"],fe={for:"image_middle",class:"cursor-pointer"},ve={key:0,class:"relative group"},xe=["src"],ye=e("div",{class:"group-hover:flex hidden absolute right-0 left-0 bottom-0 top-0 bg-black bg-opacity-50 z-20 items-center justify-center rounded-lg"},[e("span",{class:"inline-block border-2 rounded-lg px-4 py-3 font-bold text-sm text-white"},"Изменить")],-1),ke={key:1,class:"mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"},we=e("div",{class:"text-center"},[e("svg",{class:"mx-auto h-12 w-12 text-gray-300",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z","clip-rule":"evenodd"})]),e("div",{class:"mt-4 flex text-sm leading-6 text-indigo-600 tex"},[e("p",{class:"pl-1"}," Upload a file. PNG, JPG, GIF up to 10MB ")])],-1),Ve=[we],Ae={class:"col-span-2 border-t-2 pt-3"},ze=e("label",{class:"block",for:"image_bottom"}," Изображение: ",-1),Ce=["required"],qe={for:"image_bottom",class:"cursor-pointer"},je={key:0,class:"relative group"},Be=["src"],Ue=e("div",{class:"group-hover:flex hidden absolute right-0 left-0 bottom-0 top-0 bg-black bg-opacity-50 z-20 items-center justify-center rounded-lg"},[e("span",{class:"inline-block border-2 rounded-lg px-4 py-3 font-bold text-sm text-white"},"Изменить")],-1),Me={key:1,class:"mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"},Le=e("div",{class:"text-center"},[e("svg",{class:"mx-auto h-12 w-12 text-gray-300",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z","clip-rule":"evenodd"})]),e("div",{class:"mt-4 flex text-sm leading-6 text-indigo-600 tex"},[e("p",{class:"pl-1"}," Upload a file. PNG, JPG, GIF up to 10MB ")])],-1),Ge=[Le],De={class:"lg:col-span-2 flex items-center gap-x-3"},Ie=["checked","value"],Pe=e("label",{class:"block",for:"is_show"}," Отображать?",-1),Fe={class:"col-span-2 border-t-2 pt-3"},Ne={class:"flex items-center justify-end gap-x-3"},Se=["href"];function He(l,s,d,_,t,m){const p=u("v-select"),v=u("ckeditor"),x=u("Link"),y=u("DashboardLayout");return i(),A(y,null,{default:n(()=>[I,e("form",{class:"sm:grid sm:grid-cols-2 gap-6",onSubmit:s[11]||(s[11]=B(o=>m.submit(),["prevent"]))},[e("div",P,[F,b(e("input",{type:"text",class:"form-controls",required:"","onUpdate:modelValue":s[0]||(s[0]=o=>t.item.name=o)},null,512),[[g,t.item.name]])]),e("div",N,[S,c(p,{options:d.categories,label:"name",searchable:!0,reduce:o=>o.id,clearable:!1,modelValue:t.item.category_id,"onUpdate:modelValue":s[1]||(s[1]=o=>t.item.category_id=o)},{search:n(({attributes:o,events:a})=>[e("input",h({class:"vs__search",required:!t.item.category_id},o,f(a,!0)),null,16,H)]),_:1},8,["options","reduce","modelValue"])]),e("div",T,[E,c(p,{options:d.buildTypes,label:"name",searchable:!0,reduce:o=>o.id,clearable:!1,modelValue:t.item.build_type_id,"onUpdate:modelValue":s[2]||(s[2]=o=>t.item.build_type_id=o)},{search:n(({attributes:o,events:a})=>[e("input",h({class:"vs__search",required:!t.item.build_type_id},o,f(a,!0)),null,16,J)]),_:1},8,["options","reduce","modelValue"])]),e("div",O,[R,c(p,{options:t.floors,searchable:!0,clearable:!1,modelValue:t.item.floor,"onUpdate:modelValue":s[3]||(s[3]=o=>t.item.floor=o)},{search:n(({attributes:o,events:a})=>[e("input",h({class:"vs__search",required:!t.item.floor},o,f(a,!0)),null,16,K)]),_:1},8,["options","modelValue"])]),e("div",Q,[W,e("select",X,[(i(!0),r(q,null,z(t.types,o=>(i(),r("option",{key:o.value,value:o.value},C(o.label),9,Y))),128))])]),e("div",Z,[e("div",$,[ee,b(e("input",{type:"number",step:"0.1",class:"form-controls",required:"","onUpdate:modelValue":s[4]||(s[4]=o=>t.item.size_from=o),min:"1"},null,512),[[g,t.item.size_from]])]),e("div",te,[oe,b(e("input",{type:"number",step:"0.1",class:"form-controls",required:"","onUpdate:modelValue":s[5]||(s[5]=o=>t.item.size_to=o),min:"1"},null,512),[[g,t.item.size_to]])])]),e("div",se,[le,c(v,{modelValue:t.item.body,"onUpdate:modelValue":s[6]||(s[6]=o=>t.item.body=o),editor:t.editor,config:t.editorConfig},null,8,["modelValue","editor","config"])]),e("div",ie,[re,e("input",{id:"image_top",onChange:s[7]||(s[7]=o=>m.changeImage(o,"image_top")),type:"file",accept:"image/*",required:t.item.image_top=="",class:"w-[1px] h-[1px] opacity-0"},null,40,de),e("label",ae,[t.item.image_top?(i(),r("div",ne,[e("img",{class:"object-cover h-[270px] rounded-lg border border-dashed border-gray-900/25 w-full",src:t.item.image_top,alt:""},null,8,ce),me])):(i(),r("div",ue,pe))])]),e("div",be,[ge,e("input",{id:"image_middle",onChange:s[8]||(s[8]=o=>m.changeImage(o,"image_middle")),type:"file",accept:"image/*",required:t.item.image_middle=="",class:"w-[1px] h-[1px] opacity-0"},null,40,he),e("label",fe,[t.item.image_middle?(i(),r("div",ve,[e("img",{class:"object-cover h-[270px] rounded-lg border border-dashed border-gray-900/25 w-full",src:t.item.image_middle,alt:""},null,8,xe),ye])):(i(),r("div",ke,Ve))])]),e("div",Ae,[ze,e("input",{id:"image_bottom",onChange:s[9]||(s[9]=o=>m.changeImage(o,"image_bottom")),type:"file",accept:"image/*",required:t.item.image_bottom=="",class:"w-[1px] h-[1px] opacity-0"},null,40,Ce),e("label",qe,[t.item.image_bottom?(i(),r("div",je,[e("img",{class:"object-cover h-[270px] rounded-lg border border-dashed border-gray-900/25 w-full",src:t.item.image_bottom,alt:""},null,8,Be),Ue])):(i(),r("div",Me,Ge))])]),e("div",De,[e("input",{id:"is_show",name:"is_show",type:"checkbox",onChange:s[10]||(s[10]=o=>t.item.status=t.item.status=="active"?"deactive":"active"),checked:t.item.status=="active",value:t.item.status,class:"h-4 w-4 rounded border-white/10 bg-white/5 text-[#16A34A] focus:ring-[#16A34A] focus:ring-offset-gray-900 ring ring-[#16A34A]"},null,40,Ie),Pe]),e("div",Fe,[e("div",Ne,[c(x,{class:"dash-btn !bg-gray-300 !text-gray-800",href:l.route("projects.index")},{default:n(()=>[j("Назад")]),_:1},8,["href"]),e("button",{class:"dash-btn",href:l.route("projects.index")}," Сохранить ",8,Se)])])],32)]),_:1})}const Qe=G(D,[["render",He]]);export{Qe as default};
