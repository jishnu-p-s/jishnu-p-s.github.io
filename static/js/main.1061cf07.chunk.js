(this["webpackJsonpreact-redux-tutorial"]=this["webpackJsonpreact-redux-tutorial"]||[]).push([[0],{51:function(e,t,c){},6:function(e,t,c){e.exports={product_box:"productcomponent_product_box__2zjHT",product:"productcomponent_product__21GP8",imagediv:"productcomponent_imagediv__3P6IV",productcard:"productcomponent_productcard__v7cf3",card:"productcomponent_card__1MMq1",title:"productcomponent_title__28G6Y",textfield:"productcomponent_textfield__12lp1",pricecontainer:"productcomponent_pricecontainer__ktFSK",sp:"productcomponent_sp__3d_NA",cp:"productcomponent_cp__2ROe2",straight:"productcomponent_straight__1L623",discount:"productcomponent_discount__2XNct",addtocart:"productcomponent_addtocart__dzTnW",buttonGroup:"productcomponent_buttonGroup__4Ecvo",addDiv:"productcomponent_addDiv__OZ5Qd"}},75:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(17),o=c.n(a),i=c(5),d=c(2),s=(c(51),c(13)),l=c(4),u=c(16),j=c.n(u),b=c(24),p=c(38),O=c.n(p).a.create({baseURL:"https://api.mydukaan.io/api/product/buyer/c646d36f-4f8d-40bf-89ab-bfbc9c0934f0"}),h="FETCH_PRODUCTS",m="SET_PRODUCTS",x="SELECTED_PRODUCT",v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.query,c=void 0===t?"a":t;return function(){var e=Object(b.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOADING",payload:!0}),e.prev=1,t({type:"ERROR",payload:!1}),e.next=5,O.get("/product-list/?category=&ordering=&search=".concat(c,"&page=1&pop_fields=category_data,store_data"));case 5:r=e.sent,n=r.data,t({type:h,payload:n.results}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t({type:"ERROR",payload:!0});case 13:t({type:"LOADING",payload:!1});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},f=function(e){return function(t){t({type:"FOCUS",payload:e})}},g=c(1),y=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.theme})),c=t.mode,n=t.theme,a=Object(i.c)((function(e){return e.allProducts})),o=a.focus,l=a.searchText;return Object(r.useEffect)((function(){o&&(document.getElementById("search").focus(),e(f(!1)))}),[o,e]),console.log(l),Object(g.jsx)("div",{style:n,className:"ui fixed menu",children:Object(g.jsxs)("div",{className:"ui  container center",children:[Object(g.jsx)(s.b,{to:"/",children:Object(g.jsx)("h2",{style:n,children:"Star link"})}),Object(g.jsxs)("button",{style:{height:"30px",margin:"0px 8px",padding:5,backgroundColor:"yellow",border:0,borderRadius:10,boxShadow:"1px 2px #888888"},className:"ui link cards",onClick:function(){e(function(e){return function(t){t({type:"THEME",payload:e})}}("dark"===c?"light":"dark"))},children:["Switch to ","dark"===c?"LIGHT ":"DARK","Mode"]}),Object(g.jsx)("input",{onChange:function(t){return e((c=t.target.value,function(e){e({type:"SEARCH",payload:c})}));var c},placeholder:"search",id:"search",value:l,style:Object(d.a)(Object(d.a)({height:"30px",borderRadius:10},n),{},{outline:"none",padding:10})}),Object(g.jsx)("button",{style:{height:"30px",backgroundColor:"blueviolet",color:"white",padding:5,cursor:"pointer",marginLeft:10},onClick:function(){return e(v({query:l||"a"}))},children:"Search"})]})})},_=c(42),N=c(6),k=c.n(N),w=function(e){var t=e.products,c=function(e){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0,minimumFractionDigits:0}).format(e)},n=Object(r.useState)(0),a=Object(_.a)(n,2),o=a[0],i=a[1],d=function(e){(-1===e&&0!==o||1===e&&99!==o)&&i(o+e)},l=t.map((function(e){var t=e.id,r=e.name,n=e.image,a=e.selling_price,i=e.original_price;return Object(g.jsx)("div",{className:k.a.card,children:Object(g.jsxs)("div",{className:k.a.productcard,children:[Object(g.jsxs)(s.b,{className:k.a.link,to:"#",children:[Object(g.jsx)("div",{className:k.a.imagediv,children:Object(g.jsx)("div",{style:{backgroudColor:"yellow"},children:Object(g.jsx)("img",{src:n,alt:r})})}),Object(g.jsxs)("div",{className:k.a.textfield,children:[Object(g.jsx)("div",{className:k.a.title,children:r}),Object(g.jsx)("div",{children:"per piece"}),Object(g.jsxs)("div",{className:k.a.pricecontainer,children:[Object(g.jsxs)("div",{className:k.a.sp,children:["Price ",c(a)]}),Object(g.jsx)("div",{className:k.a.cp,children:Object(g.jsx)("s",{children:c(i)})}),Object(g.jsxs)("div",{className:k.a.discount,children:[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.round(100*(e-t)/e,3)}(i,a),"%Off"]})]})]})]}),Object(g.jsx)("div",{className:k.a.addtocart,children:Object(g.jsxs)("div",{className:k.a.buttonGroup,children:[0!==o?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("button",{disabled:0===o,onClick:function(){return d(-1)},children:"-"}),Object(g.jsx)("div",{children:o})]}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:k.a.addDiv,onClick:function(){return d(1)},style:{width:"60px"},children:"Add"})}),Object(g.jsx)("button",{disabled:99===o,onClick:function(){return d(1)},children:"+"})]})})]})},t)}));return Object(g.jsx)(g.Fragment,{children:l})},E=c(20),C=c.n(E),R=function(){var e=Object(i.c)((function(e){return e.loading})),t=e.error,c=e.loading,n=Object(i.c)((function(e){return e.theme})).theme,a=Object(i.c)((function(e){return e.allProducts})).searchText,o=Object(i.c)((function(e){return e.allProducts.products}));o=Object(r.useMemo)((function(){return o.filter((function(e){return e.original_price=1.05*e.original_price}))}),[o]);var d=Object(i.b)();return Object(r.useEffect)((function(){d(v({query:a||""}))}),[d]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{className:k.a.product,children:[t&&Object(g.jsx)("div",{style:{width:"100vw",textAlign:"center",fontSize:"35px"},children:"Error occured !!"}),c?Object(g.jsx)(C.a,{loading:!0,background:n.backgroundColor,loaderColor:"#3498db"}):Object(g.jsx)(w,{products:o})]})]})},S={image:"",title:"",price:"",category:"",description:""},D=function(){var e=Object(i.c)((function(e){return e.theme})).theme,t=Object(i.c)((function(e){return e.loading})).error,c=Object(l.f)().productId,n=Object(i.c)((function(e){return e.product["product_".concat(c)]})),a=n||S,o=a.image,d=a.title,s=a.price,u=a.category,p=a.description,h=Object(i.b)();return Object(r.useEffect)((function(){var e;window.scrollTo(0,0),c&&""!==c&&h((e=c,function(){var t=Object(b.a)(j.a.mark((function t(c){var r,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:"LOADING",payload:!0}),t.prev=1,c({type:"ERROR",payload:!1}),t.next=5,O.get("/products/".concat(e));case 5:r=t.sent,n=r.data,c({type:x,payload:{data:n,id:e}}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),c({type:"ERROR",payload:!0});case 13:c({type:"LOADING",payload:!1});case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()))}),[h,c]),Object(g.jsxs)("div",{style:e,className:"ui grid container",children:[t&&Object(g.jsx)("div",{style:{width:"100vw",textAlign:"center",fontSize:"35px"},children:"Error occured !!"}),n&&0!==Object.keys(n).length?Object(g.jsx)("div",{style:e,className:"ui placeholder segment",children:Object(g.jsxs)("div",{className:"ui two column stackable center aligned grid",children:[Object(g.jsx)("div",{style:e,className:"ui vertical divider",children:"AND"}),Object(g.jsxs)("div",{style:e,className:"middle aligned row",children:[Object(g.jsx)("div",{className:"column lp",children:Object(g.jsx)("img",{className:"ui fluid image",src:o,alt:d})}),Object(g.jsxs)("div",{style:e,className:"column rp",children:[Object(g.jsx)("h1",{children:d}),Object(g.jsxs)("h2",{className:"ui teal tag label",children:["$",s]}),Object(g.jsx)("h3",{className:"ui brown block header",children:u}),Object(g.jsx)("p",{children:p}),Object(g.jsxs)("div",{className:"ui vertical animated button",tabIndex:"0",children:[Object(g.jsx)("div",{className:"hidden content",children:Object(g.jsx)("i",{className:"shop icon"})}),Object(g.jsx)("div",{className:"visible content",children:"Add to Cart"})]})]})]})]})}):Object(g.jsx)(C.a,{loading:!0,background:e.backgroundColor,loaderColor:"#3498db"})]})};var T=function(){var e=Object(i.c)((function(e){return e.theme})).theme,t=Object(i.b)();return Object(r.useEffect)((function(){window.addEventListener("keypress",(function(e){"k"===e.key.toLowerCase()&&t(f(!0))}))}),[t]),Object(g.jsx)("div",{style:Object(d.a)(Object(d.a)({},e),{},{minHeight:"100vh"}),className:"App",children:Object(g.jsxs)(s.a,{children:[Object(g.jsx)(y,{}),Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{path:"/",exact:!0,component:R}),Object(g.jsx)(l.a,{path:"/product/:productId",exact:!0,component:D}),Object(g.jsxs)(l.a,{children:[Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{style:{width:"100vw",textAlign:"center",fontSize:"35px",marginTop:"10vh",maxHeight:"10vh"},children:"Not found !!"})]})]})]})})},A=c(11),I=c(19),L={products:[],searchText:"",focus:!1},F={light:{color:"black",backgroundColor:"lightgray"},dark:{color:"white",backgroundColor:"black"}},G=Object(A.c)({allProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,c=t.type,r=t.payload;switch(c){case m:case h:return Object(d.a)(Object(d.a)({},e),{},{products:r});case"SEARCH":return Object(d.a)(Object(d.a)({},e),{},{searchText:r});case"FOCUS":return Object(d.a)(Object(d.a)({},e),{},{focus:r});default:return e}},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,c=t.type,r=t.payload;switch(c){case x:return Object(d.a)(Object(d.a)({},e),{},Object(I.a)({},"product_".concat(String(r.id)),Object(d.a)({},r.data)));default:return e}},addSub:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{sum:0},t=arguments.length>1?arguments[1]:void 0,c=t.type,r=t.payload;switch(c){case"ADD":return Object(d.a)(Object(d.a)({},e),{},{sum:e.sum+r});case"SUB":return Object(d.a)(Object(d.a)({},e),{},{sum:e.sum-r});default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{theme:F.light,mode:"light"},t=arguments.length>1?arguments[1]:void 0,c=t.type,r=t.payload;switch(c){case"THEME":return Object(d.a)(Object(d.a)({},e),{},{theme:F[r],mode:r});default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!1,error:!1},t=arguments.length>1?arguments[1]:void 0,c=t.type,r=t.payload;switch(c){case"LOADING":return Object(d.a)(Object(d.a)({},e),{},{loading:r});case"ERROR":return Object(d.a)(Object(d.a)({},e),{},{error:r});default:return e}}}),P=c(27),H=c(39),M=c.n(H),U=c(40),z={key:"root",storage:M.a},q=Object(P.a)(z,G),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.d,X=Object(A.e)(q,B(Object(A.a)(U.a))),J=Object(P.b)(X),K=c(41);o.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(i.a,{store:X,children:Object(g.jsx)(K.a,{loading:null,persistor:J,children:Object(g.jsx)(T,{})})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.1061cf07.chunk.js.map