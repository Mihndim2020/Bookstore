(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{30:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(16),o=c.n(a),r=(c(30),c(14)),i=c(3),l=c(10),b=c.p+"static/media/profileIcon.8188ccd6.png",j=c(1),u=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"title-navbar",children:[Object(j.jsxs)("div",{className:"leftNav",children:[Object(j.jsx)("h1",{className:"title-logo",children:"Bookstore CMS"}),Object(j.jsx)("nav",{className:"nav-links",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/",className:"books",children:"BOOKS"})}),Object(j.jsx)("li",{children:Object(j.jsx)(r.b,{to:"/categories",className:"categories",children:"CATEGORIES"})})]})})]}),Object(j.jsx)("img",{className:"profileIcon",src:b,alt:"Profile Icon"})]}),Object(j.jsx)("span",{children:Object(j.jsx)("i",{})})]})},p=function(e){var t=e.title,c=e.category;return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"book-category",children:c}),Object(j.jsx)("p",{className:"book-title",children:t})]})},O=c(5),d=c.n(O),h=c(9),m=c(11),f=c(15),x="".concat("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/").concat("8XtEBYC6eVokmXoQ8g8c","/books/"),k=function(){var e=Object(h.a)(d.a.mark((function e(t){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={item_id:t.id,title:t.title,category:t.category},e.next=3,fetch(x,{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(c)});case 3:return n=e.sent,e.abrupt("return",n.status);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(h.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x).concat(t),{method:"DELETE",headers:{"Content-Type":"application/json; charset=UTF-8"}});case 2:return c=e.sent,e.abrupt("return",c.status);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v="books/booksslice/GET_BOOKS",S="books/booksslice/GET_BOOKS_SUCCESS",g="books/booksslice/GET_BOOKS_ERR",w="".concat("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/").concat("8XtEBYC6eVokmXoQ8g8c","/books/"),y=function(){return function(){var e=Object(h.a)(d.a.mark((function e(t){var c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:v}),e.next=3,fetch(w);case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,e.abrupt("return",t({type:S,books:n}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T="bookStore/books/ADD_BOOK",U="bookStore/books/REMOVE_BOOK",C={books:[],pending:!1,error:null},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return k(t.payload),e;case U:var c=Object.fromEntries(Object.entries(e.books).filter((function(e){return Object(f.a)(e,1)[0]!==t.payload})));return N(t.payload),Object(m.a)(Object(m.a)({},e),{},{pending:!1,books:c});case v:return Object(m.a)(Object(m.a)({},e),{},{pending:!0});case S:return Object(m.a)(Object(m.a)({},e),{},{pending:!1,books:t.books});case g:return Object(m.a)(Object(m.a)({},e),{},{pending:!1,error:t.error});default:return e}},E=function(e){var t=e.id,c=Object(l.b)(),n=function(){var e=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c({type:U,payload:t});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"book-actions",children:[Object(j.jsx)("a",{href:"/#",className:"action-buttons",children:"Comments"}),Object(j.jsx)("span",{className:"stroke",children:" | "}),Object(j.jsx)("a",{href:"/#",onClick:n,className:"action-buttons",children:"Remove"}),Object(j.jsx)("span",{className:"stroke",children:" | "}),Object(j.jsx)("a",{href:"/#",className:"action-buttons",children:"Edit"})]})},F=function(){return Object(j.jsxs)("div",{className:"book-completion-status",children:[Object(j.jsx)("img",{className:"statusIcon",src:"data:image/png;base64,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",alt:"Status Icon"}),Object(j.jsxs)("div",{className:"stats",children:[Object(j.jsx)("p",{className:"completion-percentage",children:"78%"}),Object(j.jsx)("p",{className:"text-completed",children:"Completed"})]})]})},R=function(){return Object(j.jsxs)("div",{className:"book-progress",children:[Object(j.jsx)("p",{className:"current-chapter",children:"CURRENT CHAPTER"}),Object(j.jsx)("p",{className:"progress-chapter",children:"Introduction"}),Object(j.jsx)("button",{type:"button",className:"update-progress Rectangle-2",children:"UPDATE PROGRESS"})]})},M=function(e){var t=e.id,c=e.title,n=e.category;return Object(j.jsxs)("div",{className:"book-row",children:[Object(j.jsxs)("div",{className:"first-column",children:[Object(j.jsx)(p,{title:c,category:n}),Object(j.jsx)(E,{id:t})]}),Object(j.jsx)("div",{className:"middle-column",children:Object(j.jsx)(F,{})}),Object(j.jsx)("div",{children:Object(j.jsx)(R,{})})]})},Z=function(){var e=[],t=Object(l.b)();Object(n.useEffect)((function(){t(y())}),[]);var c=Object(l.c)((function(e){return e.booksReducer.books}));c.error?c=[]:Object.keys(c).forEach((function(t){c[t].map((function(c){return e.push(Object(j.jsx)(M,{id:t,title:c.title,category:c.category},t))}))}));return Object(j.jsx)(j.Fragment,{children:e})},A=c(43),K=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),o=Object(f.a)(a,2),r=o[0],i=o[1],b=Object(l.b)(),u=function(){var e=Object(h.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={id:Object(A.a)(),category:c,title:r},b({type:T,payload:n}),s(""),i(""),e.next=7,b(y());case 7:document.location.reload(!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"add-book-title",children:"ADD NEW BOOK"}),Object(j.jsxs)("form",{onSubmit:u,className:"add-book-form",children:[Object(j.jsx)("input",{name:"title",className:"title-input",placeholder:"Book title",value:r,onChange:function(e){i(e.target.value)}}),Object(j.jsxs)("select",{className:"category-select",name:"category",id:"categories",value:c,onChange:function(e){s(e.target.value)},children:[Object(j.jsx)("option",{defaultValue:"",children:"Category"}),Object(j.jsx)("option",{value:"Action",children:"Action"}),Object(j.jsx)("option",{value:"Science-fiction",children:"Science Fiction"}),Object(j.jsx)("option",{value:"Economy",children:"Economy"})]}),Object(j.jsx)("input",{className:"add-book-button",type:"submit",value:"ADD BOOK"})]})]})},D=function(){return Object(j.jsx)("h1",{className:"Cat",children:"Under construction"})},W=c(17),I=c(24),V=c.n(I),z=c(25),P=Object(W.b)({booksReducer:q}),Q=Object(W.c)(P,Object(W.a)(z.a,V.a)),B=function(){return Object(j.jsx)(l.a,{store:Q,children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(u,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",children:Object(j.jsxs)("div",{className:"mainContainer",children:[Object(j.jsx)(Z,{}),Object(j.jsx)(K,{})]})}),Object(j.jsx)(i.a,{path:"/categories",children:Object(j.jsx)(D,{})})]})]})})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),a(e),o(e)}))};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root")),J()}},[[41,1,2]]]);
//# sourceMappingURL=main.378a42f3.chunk.js.map