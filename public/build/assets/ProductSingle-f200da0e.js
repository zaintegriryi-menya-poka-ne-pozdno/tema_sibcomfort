import{_ as u}from"./AppLayout-a0dce2f0.js";import{p as x,q as b,o as s,e as o,b as a,w as l,a as t,N as f,h as v,t as n,F as d,g as w,f as r,l as y,u as L,Z as h,B as S}from"./app-00f1f0af.js";/* empty css                        */import{S as m}from"./sweetalert2-c9babbd4.js";import{_ as k}from"./CatalogForm-ffbdbc15.js";import"./_plugin-vue_export-helper-c27b6911.js";const B={class:"relative home-slider",id:"header-main"},H=t("div",{class:"absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"},null,-1),T={class:"container mx-auto relative z-50"},A={class:"mt-[150px] pb-[100px] text-center"},C=["innerHTML"],M=["innerHTML"],j={id:"catalogSection",class:"bg-[#393939] relative"},N={class:"container mx-auto"},P={class:"text-[#16A34A] px-4 text-[32px] md:text-[56px] text-right relative"},V={class:"pb-16"},D={class:"flex-col flex md:flex-row justify-between gap-8 my-16 px-2"},$={class:"w-full md:w-8/12"},z=["src"],F=["innerHTML"],I={class:"w-full md:w-4/12"},O={class:"text-lg"},q={id:"moreProjectIpoteka",class:"mt-6 py-14 bg-gray-900 relative bg-[url('/image/BGcatalogProject.webp')] bg-cover bgSidesShadow"},E={class:"container mx-auto px-4"},G=t("h2",{class:"text-[#16A34A] text-[25px] mt-10 md:text-[56px] text-center md:text-left relative"},[r(" Нужно больше проектов для выбора?"),t("br"),r(" скачайте наш полный каталог! ")],-1),Z={class:"grid grid-cols-12 gap-4"},J={class:"col-span-12 md:col-span-6 order-1 md:order-none"},K={src:"/image/catalog.webp",alt:"catalog.webp"},Q={components:{AppLayout:u,Head:h},props:{product:{type:Object,default:{}},randomProducts:{type:Array,default:[]}},data(){return{bid:{name:"",phone:"",email:""}}},methods:{sendCatalog(){S.product(route("send.catalog"),this.bid).then(e=>{m.fire({title:"Ваш запрос принят в работу",timer:3e3,timerProgressBar:!0,showConfirmButton:!1,icon:"success"}),this.bid={name:"",phone:"",email:""}}).catch(e=>{m.fire({title:"Ошибка при отправки запроса",timer:3e3,timerProgressBar:!0,showConfirmButton:!1,icon:"error"})})}}},st=Object.assign(Q,{__name:"ProductSingle",setup(e){return(p,R)=>{const _=x("Link"),g=b("tilt");return s(),o(d,null,[a(u,{"show-slider":!1},{default:l(()=>{var c;return[t("header",B,[t("div",{class:"text-white pt-8 max-h-screen bg-cover bg-no-repeat relative bgSidesShadow",style:f({backgroundImage:`url(${e.product.image})`})},[H,t("div",T,[t("div",A,[t("h1",{class:"lg:text-[64px] lg:w-4/5 mx-auto text-[36px]",innerHTML:e.product.name},null,8,C),((c=e.product.body)==null?void 0:c.length)>0?(s(),o("p",{key:0,class:"text-[20px] md:w-3/4 text-center md:mx-auto pb-[100px] sub_title_h1",innerHTML:e.product.title},null,8,M)):v("",!0)])])],4)]),t("main",j,[t("section",null,[t("div",N,[t("h2",P,n(e.product.name),1),t("div",V,[t("div",D,[t("div",$,[t("img",{src:e.product.image,alt:"cardHouse",class:"w-full mb-8 rounded md:h-[500px]"},null,8,z),t("div",{class:"text-white",innerHTML:e.product.body},null,8,F)]),t("div",I,[t("div",O,[(s(!0),o(d,null,w(e.randomProducts,i=>(s(),o("div",{class:"p-3 mb-4 bg-white rounded",key:i.id},[a(_,{href:p.route("product.single",i.id)},{default:l(()=>[r(n(i.name),1)]),_:2},1032,["href"])]))),128))])])])])])]),t("section",q,[t("div",E,[G,t("div",Z,[a(k,{type:"catalog"}),t("div",J,[y(t("img",K,null,512),[[g,{speed:500,perspective:1200}]])])])])])])]}),_:1}),a(L(h),{title:e.product.title},null,8,["title"])],64)}}});export{st as default};
