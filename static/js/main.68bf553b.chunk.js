(this["webpackJsonpreact-redux-tutorial"]=this["webpackJsonpreact-redux-tutorial"]||[]).push([[0],{49:function(e,t,c){},6:function(e,t,c){e.exports={product_box:"productcomponent_product_box__2zjHT",product:"productcomponent_product__21GP8",imagediv:"productcomponent_imagediv__3P6IV",productcard:"productcomponent_productcard__v7cf3",card:"productcomponent_card__1MMq1",title:"productcomponent_title__28G6Y",textfield:"productcomponent_textfield__12lp1",pricecontainer:"productcomponent_pricecontainer__ktFSK",sp:"productcomponent_sp__3d_NA",cp:"productcomponent_cp__2ROe2",straight:"productcomponent_straight__1L623",discount:"productcomponent_discount__2XNct",buttonGroup:"productcomponent_buttonGroup__4Ecvo",addDiv:"productcomponent_addDiv__OZ5Qd"}},74:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(17),i=c.n(a),o=c(4),d=c(2),s=(c(49),c(12)),l=c(3),u=c(16),j=c.n(u),b=c(22),p=c(36),O=c.n(p).a.create({baseURL:"https://api.mydukaan.io/api/product/buyer/c646d36f-4f8d-40bf-89ab-bfbc9c0934f0"}),h="FETCH_PRODUCTS",m="SET_PRODUCTS",x="SELECTED_PRODUCT",f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.query,c=void 0===t?"a":t;return function(){var e=Object(b.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,t({type:"ERROR",payload:!1}),e.next=5,O.get("/product-list/?category=&ordering=&search=".concat(c,"&page=1&pop_fields=category_data,store_data"));case 5:r=e.sent,n=r.data,t({type:h,payload:n.results}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t({type:"ERROR",payload:!0});case 13:t({type:"LOADING",payload:!1});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},g=function(e){return function(t){t({type:"FOCUS",payload:e})}},v=c(1),y=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.theme})),c=t.mode,n=t.theme,a=Object(o.c)((function(e){return e.allProducts})),i=a.focus,l=a.searchText;Object(r.useEffect)((function(){i&&(document.getElementById("search").focus(),e(g(!1)))}),[i,e]);return Object(v.jsx)("div",{style:n,className:"ui fixed menu",children:Object(v.jsxs)("div",{className:"ui  container center",children:[Object(v.jsx)(s.b,{to:"/",children:Object(v.jsx)("img",{style:{width:"100px"},src:"starlink.png",alt:"starlink"})}),Object(v.jsx)("button",{style:{height:"30px",margin:"0px 8px",padding:5,backgroundColor:"yellow",border:0,borderRadius:10,boxShadow:"1px 2px #888888",cursor:"pointer"},className:"ui link cards",onClick:function(){e(function(e){return function(t){t({type:"THEME",payload:e})}}("dark"===c?"light":"dark"))},children:"dark"===c?"LIGHT ":"DARK"}),Object(v.jsx)("input",{onChange:function(t){return e((c=t.target.value,function(e){e({type:"SEARCH",payload:c})}));var c},placeholder:"search",id:"search",value:l,style:Object(d.a)(Object(d.a)({height:"30px",borderRadius:10},n),{},{outline:"none",padding:10})}),Object(v.jsx)("button",{style:{height:"30px",backgroundColor:"blueviolet",color:"white",padding:5,cursor:"pointer",marginLeft:10},onClick:function(){return e(f({query:l||"a"}))},children:"Search"})]})})},_=c(40),N=c(6),k=c.n(N),w=function(e){var t=e.products,c=function(e){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0,minimumFractionDigits:0}).format(e)},n=Object(r.useState)(0),a=Object(_.a)(n,2),i=a[0],o=a[1],d=function(e){(-1===e&&0!==i||1===e&&99!==i)&&o(i+e)},l=t.map((function(e){var t=e.id,r=e.name,n=e.image,a=e.selling_price,o=e.original_price;return Object(v.jsx)("div",{className:k.a.card,children:Object(v.jsxs)("div",{className:k.a.productcard,children:[Object(v.jsxs)(s.b,{to:"#",children:[Object(v.jsx)("div",{className:k.a.imagediv,children:Object(v.jsx)("img",{src:n,alt:r})}),Object(v.jsxs)("div",{className:k.a.textfield,children:[Object(v.jsx)("div",{className:k.a.title,children:r}),Object(v.jsx)("div",{children:"per piece"}),Object(v.jsxs)("div",{className:k.a.pricecontainer,children:[Object(v.jsxs)("div",{className:k.a.sp,children:["Price ",c(a)]}),Object(v.jsx)("div",{className:k.a.cp,children:Object(v.jsx)("s",{children:c(o)})}),Object(v.jsxs)("div",{className:k.a.discount,children:[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.round(100*(e-t)/e)}(o,a),"% Off"]})]})]})]}),Object(v.jsxs)("div",{className:k.a.buttonGroup,children:[0!==i?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("button",{disabled:0===i,onClick:function(){return d(-1)},children:"-"}),Object(v.jsx)("div",{children:i})]}):Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:k.a.addDiv,onClick:function(){return d(1)},style:{width:"60px"},children:"Add"})}),Object(v.jsx)("button",{disabled:99===i,onClick:function(){return d(1)},children:"+"})]})]})},t)}));return Object(v.jsx)(v.Fragment,{children:l})},E=c(19),R=c.n(E),C=function(){var e=Object(o.c)((function(e){return e.loading})),t=e.error,c=e.loading,n=Object(o.c)((function(e){return e.theme})).theme,a=Object(o.c)((function(e){return e.allProducts})).searchText,i=Object(o.c)((function(e){return e.allProducts.products}));i=Object(r.useMemo)((function(){return i.filter((function(e){return e.original_price=1.05*e.original_price}))}),[i]);var d=Object(o.b)();return Object(r.useEffect)((function(){d(f({query:a||""}))}),[d]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:k.a.product,children:[t&&Object(v.jsx)("div",{style:{width:"100vw",textAlign:"center",fontSize:"35px"},children:"Error occured !!"}),c?Object(v.jsx)(R.a,{loading:!0,background:n.backgroundColor,loaderColor:"#3498db"}):Object(v.jsx)(w,{products:i})]})]})},S={image:"",title:"",price:"",category:"",description:""},D=function(){var e=Object(o.c)((function(e){return e.theme})).theme,t=Object(o.c)((function(e){return e.loading})).error,c=Object(l.f)().productId,n=Object(o.c)((function(e){return e.product["product_".concat(c)]})),a=n||S,i=a.image,d=a.title,s=a.price,u=a.category,p=a.description,h=Object(o.b)();return Object(r.useEffect)((function(){var e;window.scrollTo(0,0),c&&""!==c&&h((e=c,function(){var t=Object(b.a)(j.a.mark((function t(c){var r,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:"LOADING",payload:!0}),t.prev=1,c({type:"ERROR",payload:!1}),t.next=5,O.get("/products/".concat(e));case 5:r=t.sent,n=r.data,c({type:x,payload:{data:n,id:e}}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),c({type:"ERROR",payload:!0});case 13:c({type:"LOADING",payload:!1});case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()))}),[h,c]),Object(v.jsxs)("div",{style:e,className:"ui grid container",children:[t&&Object(v.jsx)("div",{style:{width:"100vw",textAlign:"center",fontSize:"35px"},children:"Error occured !!"}),n&&0!==Object.keys(n).length?Object(v.jsx)("div",{style:e,className:"ui placeholder segment",children:Object(v.jsxs)("div",{className:"ui two column stackable center aligned grid",children:[Object(v.jsx)("div",{style:e,className:"ui vertical divider",children:"AND"}),Object(v.jsxs)("div",{style:e,className:"middle aligned row",children:[Object(v.jsx)("div",{className:"column lp",children:Object(v.jsx)("img",{className:"ui fluid image",src:i,alt:d})}),Object(v.jsxs)("div",{style:e,className:"column rp",children:[Object(v.jsx)("h1",{children:d}),Object(v.jsxs)("h2",{className:"ui teal tag label",children:["$",s]}),Object(v.jsx)("h3",{className:"ui brown block header",children:u}),Object(v.jsx)("p",{children:p}),Object(v.jsxs)("div",{className:"ui vertical animated button",tabIndex:"0",children:[Object(v.jsx)("div",{className:"hidden content",children:Object(v.jsx)("i",{className:"shop icon"})}),Object(v.jsx)("div",{className:"visible content",children:"Add to Cart"})]})]})]})]})}):Object(v.jsx)(R.a,{loading:!0,background:e.backgroundColor,loaderColor:"#3498db"})]})};var T=function(){var e=Object(o.c)((function(e){return e.theme})).theme,t=Object(o.b)();return Object(r.useEffect)((function(){window.addEventListener("keypress",(function(e){"k"===e.key.toLowerCase()&&t(g(!0))}))}),[t]),Object(v.jsx)("div",{style:Object(d.a)(Object(d.a)({},e),{},{minHeight:"100vh"}),className:"App",children:Object(v.jsxs)(s.a,{children:[Object(v.jsx)(y,{}),Object(v.jsxs)(l.c,{children:[Object(v.jsx)(l.a,{path:"/",exact:!0,component:C}),Object(v.jsx)(l.a,{path:"/product/:productId",exact:!0,component:D}),Object(v.jsxs)(l.a,{children:[Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{style:{width:"100vw",textAlign:"center",fontSize:"35px",marginTop:"10vh",maxHeight:"10vh"},children:"Not found !!"})]})]})]})})},A=c(11),I=c(18),L={products:[],searchText:"",focus:!1},F={light:{color:"black",backgroundColor:"lightgray"},dark:{color:"white",backgroundColor:"black"}},G=Object(A.b)({allProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,c=t.type,r=t.payload;switch(c){case m:case h:return Object(d.a)(Object(d.a)({},e),{},{products:r});case"SEARCH":return Object(d.a)(Object(d.a)({},e),{},{searchText:r});case"FOCUS":return Object(d.a)(Object(d.a)({},e),{},{focus:r});default:return e}},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,c=t.type,r=t.payload;switch(c){case x:return Object(d.a)(Object(d.a)({},e),{},Object(I.a)({},"product_".concat(String(r.id)),Object(d.a)({},r.data)));default:return e}},addSub:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{sum:0},t=arguments.length>1?arguments[1]:void 0,c=t.type,r=t.payload;switch(c){case"ADD":return Object(d.a)(Object(d.a)({},e),{},{sum:e.sum+r});case"SUB":return Object(d.a)(Object(d.a)({},e),{},{sum:e.sum-r});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{theme:F.light,mode:"light"},t=arguments.length>1?arguments[1]:void 0,c=t.type,r=t.payload;switch(c){case"THEME":return Object(d.a)(Object(d.a)({},e),{},{theme:F[r],mode:r});default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!1,error:!1},t=arguments.length>1?arguments[1]:void 0,c=t.type,r=t.payload;switch(c){case"LOADING":return Object(d.a)(Object(d.a)({},e),{},{loading:r});case"ERROR":return Object(d.a)(Object(d.a)({},e),{},{error:r});default:return e}}}),P=c(25),H=c(37),M=c.n(H),U=c(38),q={key:"root",storage:M.a},z=Object(P.a)(q,G),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.c,X=Object(A.d)(z,B(Object(A.a)(U.a))),J=Object(P.b)(X),K=c(39);i.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(o.a,{store:X,children:Object(v.jsx)(K.a,{loading:null,persistor:J,children:Object(v.jsx)(T,{})})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.68bf553b.chunk.js.map