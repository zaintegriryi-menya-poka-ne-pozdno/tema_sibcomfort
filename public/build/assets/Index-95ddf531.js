import{D as a}from"./DashboardLayout-d96027a2.js";import{_ as o}from"./CRUD-7ae692cb.js";import{o as s,c as l,w as r,b as u}from"./app-00f1f0af.js";import"./_plugin-vue_export-helper-c27b6911.js";/* empty css                        */import"./sweetalert2-c9babbd4.js";const f={__name:"Index",props:{projects:Object},setup(t){const e=t;return(m,c)=>(s(),l(a,null,{default:r(()=>[u(o,{title:"Проекты",meta:"Проект",name:"projects",items:e.projects,fields:[{label:"№",value:"id"},{label:"Название",value:"name"},{label:"Статус отображения",value:"status"},{label:"Последние изменение",value:"last_updated_at"},{label:"Тип",value:"type",items:{building:"Проекты",ready:"Готовые объекты"}}],"show-add-button":!1,"show-custom-add-button":!0,"show-custom-edit-button":!0},null,8,["items"])]),_:1}))}};export{f as default};