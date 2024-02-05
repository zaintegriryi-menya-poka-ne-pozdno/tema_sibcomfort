import{D as z}from"./DashboardLayout-d96027a2.js";import{B as A,O as j,p as u,o as i,c as C,w as n,a as e,l as p,A as g,b as c,s as h,C as f,z as q,e as r,g as B,t as y,F as U,f as x,i as M}from"./app-00f1f0af.js";import{C as L}from"./vue-select-954840c9.js";import{S as G}from"./sweetalert2-c9babbd4.js";import{C as D}from"./ckeditor-f9579a91.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";const P={components:{DashboardLayout:z,vSelect:L},props:{project:{type:Object,default:{}},categories:{type:Array,default:[]},buildTypes:{type:Array,default:[]}},data(){return{item:{name:"",image_top:"",image_middle:"",image_bottom:"",body:"",status:"",size_from:"",size_to:"",floor:"",category_id:"",build_type_id:"",type:"building"},types:[{label:"Проекты",value:"building"},{label:"Готовые объекты",value:"ready"}],editor:D,editorConfig:{ckfinder:{uploadUrl:"/dashboard/editor/upload",name:"upload",url:"url"},mediaEmbed:{previewsInData:!0}},floors:[]}},mounted(){this.item=this.project;for(var l=1;l<=3;l++)this.floors.push(l)},methods:{changeImage(l,s){if(l.target.files.length>0){var d=l.target;if(d.files&&d.files[0]){var _=new FileReader;_.onload=t=>{this.item[s]=t.target.result},_.readAsDataURL(d.files[0])}}},submit(){A.put(route("projects.update",this.item.id),this.item).then(l=>{G.fire({title:"Проект успешно обновлен",timer:3e3,timerProgressBar:!0,showConfirmButton:!1,icon:"success",toast:!0,position:"top-end"}),j.visit(route("projects.index"),{replace:!0})}).catch(l=>{console.log(l.response.data)})}}},F=e("div",{class:"mb-6"},[e("h2",{class:"font-bold text-xl"},"Редактировать проект")],-1),N={class:""},S=e("label",{class:"block",for:""},"Название :",-1),E={class:""},H=e("label",{class:"block",for:""},"Материал:",-1),T=["required"],J={class:""},O=e("label",{class:"block",for:""},"Тип стройки:",-1),R=["required"],K={class:""},Q=e("label",{class:"block",for:""},"Этаж:",-1),W=["required"],X={class:""},Y=e("label",{class:"block",for:""},"Тип:",-1),Z=["value"],$={class:"grid sm:grid-cols-2 items-center gap-x-4"},ee={class:""},te=e("label",{class:"block",for:""},"Размер с:",-1),oe={class:""},se=e("label",{class:"block",for:""},"Размер до:",-1),le={class:"col-span-2 border-t-2 pt-3"},ie=e("label",{class:"block",for:""},"Описание:",-1),re={class:"col-span-2 border-t-2 pt-3"},de=e("label",{class:"block",for:"image_top"}," Изображение: ",-1),ae=["required"],ne={for:"image_top",class:"cursor-pointer"},ce={key:0,class:"relative group"},me=["src"],ue=e("div",{class:"group-hover:flex hidden absolute right-0 left-0 bottom-0 top-0 bg-black bg-opacity-50 z-20 items-center justify-center rounded-lg"},[e("span",{class:"inline-block border-2 rounded-lg px-4 py-3 font-bold text-sm text-white"},"Изменить")],-1),pe={key:1,class:"mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"},_e=e("div",{class:"text-center"},[e("svg",{class:"mx-auto h-12 w-12 text-gray-300",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z","clip-rule":"evenodd"})]),e("div",{class:"mt-4 flex text-sm leading-6 text-indigo-600 tex"},[e("p",{class:"pl-1"}," Upload a file. PNG, JPG, GIF up to 10MB ")])],-1),be=[_e],ge={class:"col-span-2 border-t-2 pt-3"},he=e("label",{class:"block",for:"image_middle"}," Изображение: ",-1),fe=["required"],ve={for:"image_middle",class:"cursor-pointer"},ye={key:0,class:"relative group"},xe=["src"],ke=e("div",{class:"group-hover:flex hidden absolute right-0 left-0 bottom-0 top-0 bg-black bg-opacity-50 z-20 items-center justify-center rounded-lg"},[e("span",{class:"inline-block border-2 rounded-lg px-4 py-3 font-bold text-sm text-white"},"Изменить")],-1),we={key:1,class:"mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"},Ve=e("div",{class:"text-center"},[e("svg",{class:"mx-auto h-12 w-12 text-gray-300",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z","clip-rule":"evenodd"})]),e("div",{class:"mt-4 flex text-sm leading-6 text-indigo-600 tex"},[e("p",{class:"pl-1"}," Upload a file. PNG, JPG, GIF up to 10MB ")])],-1),ze=[Ve],Ae={class:"col-span-2 border-t-2 pt-3"},je=e("label",{class:"block",for:"image_bottom"}," Изображение: ",-1),Ce=["required"],qe={for:"image_bottom",class:"cursor-pointer"},Be={key:0,class:"relative group"},Ue=["src"],Me=e("div",{class:"group-hover:flex hidden absolute right-0 left-0 bottom-0 top-0 bg-black bg-opacity-50 z-20 items-center justify-center rounded-lg"},[e("span",{class:"inline-block border-2 rounded-lg px-4 py-3 font-bold text-sm text-white"},"Изменить")],-1),Le={key:1,class:"mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"},Ge=e("div",{class:"text-center"},[e("svg",{class:"mx-auto h-12 w-12 text-gray-300",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z","clip-rule":"evenodd"})]),e("div",{class:"mt-4 flex text-sm leading-6 text-indigo-600 tex"},[e("p",{class:"pl-1"}," Upload a file. PNG, JPG, GIF up to 10MB ")])],-1),De=[Ge],Ie={class:"lg:col-span-2 flex items-center gap-x-3"},Pe=["checked","value"],Fe=e("label",{class:"block",for:"is_show"}," Отображать?",-1),Ne={class:"col-span-2 border-t-2 pt-3"},Se={class:"flex items-center justify-end gap-x-3"},Ee=["href"];function He(l,s,d,_,t,m){const b=u("v-select"),k=u("ckeditor"),w=u("Link"),V=u("DashboardLayout");return i(),C(V,null,{default:n(()=>{var v;return[F,e("form",{class:"sm:grid sm:grid-cols-2 gap-6",onSubmit:s[12]||(s[12]=M(o=>m.submit(),["prevent"]))},[e("div",N,[S,p(e("input",{type:"text",class:"form-controls",required:"","onUpdate:modelValue":s[0]||(s[0]=o=>t.item.name=o)},null,512),[[g,t.item.name]])]),e("div",E,[H,c(b,{options:d.categories,label:"name",searchable:!0,reduce:o=>o.id,clearable:!1,modelValue:t.item.category_id,"onUpdate:modelValue":s[1]||(s[1]=o=>t.item.category_id=o)},{search:n(({attributes:o,events:a})=>[e("input",h({class:"vs__search",required:!t.item.category_id},o,f(a,!0)),null,16,T)]),_:1},8,["options","reduce","modelValue"])]),e("div",J,[O,c(b,{options:d.buildTypes,label:"name",searchable:!0,reduce:o=>o.id,clearable:!1,modelValue:t.item.build_type_id,"onUpdate:modelValue":s[2]||(s[2]=o=>t.item.build_type_id=o)},{search:n(({attributes:o,events:a})=>[e("input",h({class:"vs__search",required:!t.item.build_type_id},o,f(a,!0)),null,16,R)]),_:1},8,["options","reduce","modelValue"])]),e("div",K,[Q,c(b,{options:t.floors,searchable:!0,clearable:!1,modelValue:t.item.floor,"onUpdate:modelValue":s[3]||(s[3]=o=>t.item.floor=o)},{search:n(({attributes:o,events:a})=>[e("input",h({class:"vs__search",required:!t.item.floor},o,f(a,!0)),null,16,W)]),_:1},8,["options","modelValue"])]),e("div",X,[Y,p(e("select",{id:"type",name:"type",class:"form-controls",required:"","onUpdate:modelValue":s[4]||(s[4]=o=>t.item.type=o)},[(i(!0),r(U,null,B(t.types,o=>(i(),r("option",{key:o.value,value:o.value},y(o.label),9,Z))),128))],512),[[q,t.item.type]])]),e("div",$,[e("div",ee,[te,p(e("input",{type:"number",step:"0.1",class:"form-controls",required:"","onUpdate:modelValue":s[5]||(s[5]=o=>t.item.size_from=o),min:"1"},null,512),[[g,t.item.size_from]])]),e("div",oe,[se,p(e("input",{type:"number",step:"0.1",class:"form-controls",required:"","onUpdate:modelValue":s[6]||(s[6]=o=>t.item.size_to=o),min:"1"},null,512),[[g,t.item.size_to]])])]),e("div",le,[ie,c(k,{modelValue:t.item.body,"onUpdate:modelValue":s[7]||(s[7]=o=>t.item.body=o),editor:t.editor,config:t.editorConfig},null,8,["modelValue","editor","config"])]),e("div",re,[de,e("input",{id:"image_top",onChange:s[8]||(s[8]=o=>m.changeImage(o,"image_top")),type:"file",accept:"image/*",required:t.item.image_top=="",class:"w-[1px] h-[1px] opacity-0"},null,40,ae),e("label",ne,[t.item.image_top?(i(),r("div",ce,[e("img",{class:"object-cover h-[270px] rounded-lg border border-dashed border-gray-900/25 w-full",src:t.item.image_top,alt:""},null,8,me),ue])):(i(),r("div",pe,be))])]),e("div",ge,[he,e("input",{id:"image_middle",onChange:s[9]||(s[9]=o=>m.changeImage(o,"image_middle")),type:"file",accept:"image/*",required:t.item.image_middle=="",class:"w-[1px] h-[1px] opacity-0"},null,40,fe),e("label",ve,[t.item.image_middle?(i(),r("div",ye,[e("img",{class:"object-cover h-[270px] rounded-lg border border-dashed border-gray-900/25 w-full",src:t.item.image_middle,alt:""},null,8,xe),ke])):(i(),r("div",we,ze))])]),e("div",Ae,[je,e("input",{id:"image_bottom",onChange:s[10]||(s[10]=o=>m.changeImage(o,"image_bottom")),type:"file",accept:"image/*",required:t.item.image_bottom=="",class:"w-[1px] h-[1px] opacity-0"},null,40,Ce),e("label",qe,[t.item.image_bottom?(i(),r("div",Be,[e("img",{class:"object-cover h-[270px] rounded-lg border border-dashed border-gray-900/25 w-full",src:t.item.image_bottom,alt:""},null,8,Ue),Me])):(i(),r("div",Le,De))])]),e("div",Ie,[e("input",{id:"is_show",name:"is_show",type:"checkbox",onChange:s[11]||(s[11]=o=>t.item.status=t.item.status=="active"?"deactive":"active"),checked:t.item.status=="active",value:t.item.status,class:"h-4 w-4 rounded border-white/10 bg-white/5 text-[#16A34A] focus:ring-[#16A34A] focus:ring-offset-gray-900 ring ring-[#16A34A]"},null,40,Pe),Fe]),e("div",Ne,[x(" Последнее изменение: "+y((v=t.item.admin)==null?void 0:v.name)+" ",1),e("div",Se,[c(w,{class:"dash-btn !bg-gray-300 !text-gray-800",href:l.route("projects.index")},{default:n(()=>[x("Назад")]),_:1},8,["href"]),e("button",{class:"dash-btn",href:l.route("projects.index")}," Сохранить ",8,Ee)])])],32)]}),_:1})}const We=I(P,[["render",He]]);export{We as default};