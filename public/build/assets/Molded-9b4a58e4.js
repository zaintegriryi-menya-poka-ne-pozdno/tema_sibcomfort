import{C,N as k,S as z,P as L,_ as S}from"./AppLayout-a0dce2f0.js";import{_ as A}from"./ProductCard-edc5b57c.js";import{_ as P}from"./CatalogForm-ffbdbc15.js";import{Z as F,p as o,o as n,e as a,b as i,w as l,a as t,N as M,s as m,F as c,g as d,c as u,t as N,n as g}from"./app-00f1f0af.js";import{C as W}from"./CustomModal-2e34fe3b.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                        */import"./sweetalert2-c9babbd4.js";const B={components:{Head:F,Carousel:C,Navigation:k,Slide:z,Pagination:L,AppLayout:S,ProductCard:A,CustomModal:W,CatalogForm:P},props:{products:{type:Array,default:[]},sliders:{type:Array,default:[]},faqs:{type:Array,default:[]}},data(){return{secondSliders:[{id:1,imagePath:"/image/pgzh.webp"},{id:2,imagePath:"/image/p-s.png"}],selectedFaq:null,settings:{itemsToShow:1,snapAlign:"center"},clientWidth:0}},mounted(){this.onresize()},methods:{onresize(){this.clientWidth=document.body.clientWidth}},created(){window.addEventListener("resize",this.onresize)},unmounted(){window.removeEventListener("resize",this.onresize)}},T={class:"relative home-slider",id:"header-main-frame"},j=t("div",{class:"absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"},null,-1),E=t("div",{class:"container mx-auto relative z-50"},[t("div",{class:"mt-[150px] pb-[100px] text-center"},[t("h1",{class:"lg:text-[64px] lg:w-4/5 mx-auto text-[36px]"}," Погонажные изделия оптом от производителя "),t("p",{class:"text-[20px] md:w-3/4 text-center md:mx-auto pb-[100px] sub_title_h1"}," Производство и оптовая продажа погонажных изделий из ангарской сосны, лиственницы, кедра, осины. ")])],-1),V=[j,E],q={id:"catalogSection",class:"bg-[#393939] relative"},D={class:"py-10"},I={class:"container mx-auto relative"},Z=t("div",{class:"absolute -top-20 right-0"},[t("h3",{class:"text-[#16A34A] px-4 text-[36px] md:text-[56px] text-right relative"}," Наша продукция ")],-1),G={class:"lg:pt-7 lg:mx-auto mx-8 md:pb-10"},J=["src"],K={class:"pb-16 px-4"},O={id:"tab-1",class:"tabsContent"},Q={class:"col-span-12"},R={class:"grid md:grid-cols-2 lg:grid-cols-4 gap-6"},U={class:"sm:container sm:mx-auto mx-[20px]"},X=["src"],Y={class:"pb-20 pt-8 sm:mx-auto mx-[20px]"},$={class:"container mx-auto"},tt=t("h2",{class:"text-[#16A34A] text-[25px] md:text-[45px] text-center md:text-left relative"}," Часто задаваемые вопросы ",-1),et={class:"grid lg:grid-cols-2 gap-[30px] my-[40px]"},st=["onClick"],ot={class:"xl:text-[20px] lg:text-[18px] text-[16px] mb-2"},nt=t("path",{d:"M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"},null,-1),it=[nt],at=["innerHTML"];function lt(ct,dt,r,rt,s,pt){const h=o("Link"),p=o("Slide"),x=o("Navigation"),v=o("Pagination"),_=o("Carousel"),b=o("ProductCard"),f=o("AppLayout"),y=o("Head"),w=o("CustomModal");return n(),a(c,null,[i(f,{isFrame:!0,showSlider:!1},{default:l(()=>[t("header",T,[t("div",{class:"text-white pt-8 max-h-screen bg-cover bg-no-repeat relative bgSidesShadow",style:M({backgroundImage:`url(${s.clientWidth>768?"/image/pogonazh.png":"/image/pogonazh_mob.png"})`})},V,4)]),t("main",q,[t("section",D,[t("div",I,[Z,t("div",G,[i(_,m({class:"block-pog",autoplay:1e4,"wrap-around":!0},s.settings),{addons:l(()=>[i(x),i(v)]),default:l(()=>[(n(!0),a(c,null,d(r.sliders,e=>(n(),u(p,{key:e.id},{default:l(()=>[i(h,{class:"md:mx-3 cursor-pointer rounded relative group w-full","aria-hidden":"true"},{default:l(()=>[t("img",{src:s.clientWidth>768?e.image:e.mobile_image,class:"w-full object-cover rounded",alt:"Дом и баня"},null,8,J)]),_:2},1024)]),_:2},1024))),128))]),_:1},16)]),t("div",K,[t("div",O,[t("div",Q,[t("div",R,[(n(!0),a(c,null,d(r.products,e=>(n(),u(b,{key:e.id,product:e,productType:"Погонаж"},null,8,["product"]))),128))])])])])])]),t("section",U,[i(_,m({class:"block-pog",autoplay:1e4,"wrap-around":!0},s.settings),{default:l(()=>[(n(),a(c,null,d(2,e=>i(p,{key:e},{default:l(()=>[t("img",{src:s.clientWidth>768?"/image/pgzh.webp":"/image/pog_mob.jpg",class:"w-full",alt:""},null,8,X)]),_:2},1024)),64))]),_:1},16)]),t("section",Y,[t("div",$,[tt,t("div",et,[(n(!0),a(c,null,d(r.faqs,e=>(n(),a("div",{class:"bg-white p-4 rounded",key:e.id},[t("div",{onClick:_t=>s.selectedFaq=s.selectedFaq==e?null:e,class:"flex items-center justify-between"},[t("h3",ot,N(e.label),1),t("span",null,[(n(),a("svg",{class:g({"rotate-180":s.selectedFaq==e}),xmlns:"http://www.w3.org/2000/svg",width:"14",height:"10",role:"presentation"},it,2))])],8,st),t("div",{class:g(["text-[14px]",s.selectedFaq==e?"block":"hidden"])},[t("p",{innerHTML:e.body},null,8,at)],2)]))),128))])])])])]),_:1}),i(y,{title:"Погонажные изделия оптом от производителя"}),i(w)],64)}const yt=H(B,[["render",lt]]);export{yt as default};
