(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{129:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a(10),i=a.n(c),o=a(20),s=a.n(o),l=a(37),d=a(54),j=a(131),u=a(167),x=a(168),m=a(160),p=a(162),b=a(163),f=a(164),h=a(165),O=a(166),g=a(71),v=new(a.n(g).a)("pk_200875ed7d9807fd030e04010ea649ecbfa596326cc58",!0),w=a(157),y=Object(w.a)((function(){return{root:{maxWidth:"100%",height:"100%"},media:{backgroundSize:"200px",height:"100px",paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"},cardTitle:{"&::first-letter":{textTransform:"uppercase"}}}})),C=function(e){var t=e.product,a=e.onAddToCard,r=y();return Object(n.jsxs)(m.a,{className:r.root,children:[Object(n.jsx)(p.a,{className:r.media,image:t.media.source,title:t.name}),Object(n.jsxs)(b.a,{children:[Object(n.jsxs)("div",{className:r.CardContent,children:[Object(n.jsx)(j.a,{variant:"h5",gutterBottom:!0,className:r.cardTitle,children:t.name}),Object(n.jsx)(j.a,{variant:"h5",children:t.price.formatted_with_symbol})]}),Object(n.jsx)(j.a,{dangerouslySetInnerHTML:{__html:t.description},variant:"body2",color:"textSecondary"})]}),Object(n.jsx)(f.a,{disableSpacing:!0,className:r.CardActions,children:Object(n.jsx)(h.a,{"aria-label":"add to card",onClick:function(){return a(t.id,1)},children:Object(n.jsx)(O.a,{})})})]})},N=Object(w.a)((function(e){return{toolbar:e.mixins.toolbar,content:{backgroundColor:"#f3f3f3",flexGrow:1,paddingTop:e.spacing(2)},middleSelect:{justifyContent:"center",display:"flex",align:"center",marginTop:"20px",marginBottom:"20px"},MiddleTestHeader:{color:"#E3BE87",fontSize:"72px",lineHeight:"2"},middleText:{marginLeft:"10px",fontSize:"20px",variant:"h1","&:hover":{fontWeight:"600",cursor:"pointer"}},root:{flexGrow:1},container:{maxwidth:"1200px"},goToShop:{fontFamily:"'Lato', sans-serif;",fontSize:"17px",marginTop:"2rem",textDecoration:"underline",cursor:"pointer",marginBottom:"0"}}})),T=function(e){var t=e.products,a=e.onAddToCard,r=N();return Object(n.jsxs)("main",{className:r.content,children:[Object(n.jsx)("div",{className:r.toolbar}),Object(n.jsxs)(j.a,{align:"center",variant:"h3",children:[Object(n.jsxs)("span",{className:r.MiddleTestHeader,children:["Best Collection ",Object(n.jsx)("br",{})," "]})," From Your Store That You Dont Want To Miss"]}),Object(n.jsx)("div",{align:"center",className:r.middleSelect,children:["All","Shampoo","Hair Shampoo","Oil"].map((function(e){return Object(n.jsx)(j.a,{className:r.middleText,variant:"body1",children:e},e)}))}),Object(n.jsx)(u.a,{className:r.container,children:Object(n.jsx)(x.a,{container:!0,justify:"center",spacing:4,className:r.grid,children:t.map((function(e){return Object(n.jsx)(x.a,{item:!0,xs:12,md:4,children:Object(n.jsx)(C,{product:e,onAddToCard:a})},e.id)}))})}),Object(n.jsx)(j.a,{align:"center",className:r.goToShop,variant:"body2",gutterBottom:"true",children:"Go to shop"})]})},S=a(27),k=a(169),B=a(170),I=a(171),_=a(172),A=a(75),G=a.n(A),z=a(11),D=a(48),E=a.p+"static/media/commerce.457bea4f.png",L=Object(w.a)((function(e){return{appBar:Object(S.a)({backgroundColor:"#f3f3f3",boxShadow:"none"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,display:"flex",alignItems:"center"},image:{marginRight:"10px"},grow:{flexGrow:1,justifyContent:"center"}}})),H=function(e){var t,a=e.itemsInCard,r=L();Object(z.f)();return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(k.a,{position:"fixed",color:"inherit",className:r.appBar,children:Object(n.jsxs)(B.a,{children:[Object(n.jsxs)(j.a,(t={component:D.b,to:"/e-commerce/",color:"secondary"},Object(S.a)(t,"color","inherit"),Object(S.a)(t,"variant","h6"),Object(S.a)(t,"className",r.title),Object(S.a)(t,"children",[Object(n.jsx)("img",{src:E,alt:"commerce logo",height:"25px",className:r.image}),"example text"]),t)),Object(n.jsx)("div",{className:r.grow,children:Object(n.jsx)(j.a,{})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(h.a,{color:"inherit",children:Object(n.jsx)(G.a,{})}),Object(n.jsx)(I.a,{badgeContent:a,color:"secondary",children:Object(n.jsx)(_.a,{})}),"}"]})]})})})},M=Object(w.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,paddingTop:e.spacing(2)},container:{width:"700px"}}})),W=Object(w.a)((function(e){return{root:{display:"flex",height:"100%"},productImage:{padding:"10px 10px 10px 10px",width:"30%",backgroundSize:"150px"},content:{display:"flex",flex:"1 0 auto",justifyContent:"space-between"},input:{marginBottom:"20px"},deleteButton:{marginBottom:"20px"},infoCard:{display:"flex",width:"80%"},rightCard:{display:"flex",flexDirection:"column"},productTitle:{"&::first-letter":{textTransform:"uppercase"},fontWeight:"700",fontSize:"20px"},more:{marginTop:"10px"},productPrice:{},letters:{marginTop:e.spacing(3)},grow:{flexGrow:"1"}}})),F=a(76),P=a.n(F),R=a(173),q=a(175),J=a(176),Y=function(e){var t=e.data,a=e.onfetchCart,r=e.onDeleteItem,c=W();return Object(n.jsxs)(m.a,{className:c.root,children:[Object(n.jsx)(p.a,{image:t.media.source,className:c.productImage,title:"product image"}),Object(n.jsx)("div",{className:c.infoCard,children:Object(n.jsxs)(b.a,{className:c.content,children:[Object(n.jsxs)("div",{className:c.letters,children:[Object(n.jsx)(j.a,{variang:"h1",className:c.productTitle,children:t.name}),Object(n.jsx)(j.a,{variant:"body2",className:c.productPrice,children:t.price.formatted_with_code}),Object(n.jsx)(R.a,{children:Object(n.jsx)(j.a,{className:c.more,children:"More"})})]}),Object(n.jsxs)("div",{className:c.rightCard,children:[Object(n.jsx)(h.a,{className:c.deleteButton,onClick:function(){return r(t.id)},children:Object(n.jsx)(P.a,{})}),Object(n.jsxs)(q.a,{value:t.quantity,onChange:function(e){a(t.id,e.target.value).then((function(){window.location.reload()}))},className:c.input,children:[Object(n.jsx)(J.a,{value:1,children:1}),Object(n.jsx)(J.a,{value:2,children:2}),Object(n.jsx)(J.a,{value:3,children:3}),Object(n.jsx)(J.a,{value:4,children:4}),Object(n.jsx)(J.a,{value:5,children:5})]}),Object(n.jsx)(j.a,{children:t.line_total.formatted_with_symbol})]})]})})]})},K=function(e){var t=e.cartItems,a=e.onfetchCart,r=e.deleteItem,c=M();return t.line_items?Object(n.jsxs)(u.a,{children:[Object(n.jsx)("div",{className:c.toolbar}),Object(n.jsx)(u.a,{className:c.container,children:Object(n.jsx)(x.a,{container:!0,justify:"center",spacing:4,className:c.grid,children:t.line_items.map((function(e){return Object(n.jsx)(x.a,{item:!0,xs:12,children:Object(n.jsx)(Y,{data:e,onfetchCart:a,onDeleteItem:r})},e.id)}))})})]}):"Loading ......"},Q=a(174),U=Object(w.a)((function(e){return{toolbar:e.mixins.toolbar,footer:{backgroundColor:"#f4f4f4",flexGrow:1,paddingTop:e.spacing(2)},footerContainer:{justifyContent:"center",display:"flex",flexDirection:"row",padding:"2rem"},footerElements:{marginLeft:"1rem"}}})),V=function(){var e=U();return Object(n.jsxs)("footer",{className:e.footer,children:[Object(n.jsx)(Q.a,{light:!0}),Object(n.jsxs)(u.a,{maxWidth:"lg",align:"center",className:e.footerContainer,children:[" \\",Object(n.jsx)(j.a,{className:e.text,children:"@ 2020 All Right Reserved"}),["About us","Policy","Term","Contact"].map((function(t){return Object(n.jsx)(j.a,{className:e.footerElements,children:Object(n.jsx)(R.a,{children:t})},t)}))]})]})},X=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(r.useState)({}),o=Object(d.a)(i,2),j=o[0],u=o[1],x=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.products.list();case 2:t=e.sent,a=t.data,c(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.cart.retrieve();case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(l.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.cart.update(t,{quantity:a});case 2:n=e.sent,u(n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.cart.remove(t);case 2:a=e.sent,n=a.cart,u(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(s.a.mark((function e(t,a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.cart.add(t,a);case 2:n=e.sent,r=n.cart,u(r);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){x(),m()}),[]),Object(n.jsx)(D.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(H,{itemsInCard:j.total_items}),Object(n.jsxs)(z.c,{children:[Object(n.jsxs)(z.a,{exact:!0,path:"/e-commerce/",children:[Object(n.jsx)(T,{products:a,onAddToCard:f}),Object(n.jsx)(V,{})]}),Object(n.jsx)(z.a,{exact:!0,path:"/cart",children:Object(n.jsx)(K,{cartItems:j,onfetchCart:p,deleteItem:b})})]})]})})};i.a.render(Object(n.jsx)(X,{}),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.369f766c.chunk.js.map