(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{34:function(e,t,n){},52:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),i=n(27),s=n.n(i),a=n(10),j=n(2),o=n(8),l=n(12);n(34);var d=function(e){return Object(c.jsx)("span",Object(o.a)(Object(o.a)({className:"delete-btn"},e),{},{role:"button",tabIndex:"0",children:"\u2717"}))};var b=function(e){var t=e.children;return Object(c.jsx)("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron",children:t})},u=n(13),h=n.n(u),O=function(){return h.a.get("/api/books")},x=function(e){return h.a.get("/api/books/"+e)},f=function(e){return h.a.delete("/api/books/"+e)},m=function(e){return h.a.post("/api/books",e)};function p(e){var t=e.fluid,n=e.children;return Object(c.jsx)("div",{className:"container".concat(t?"-fluid":""),children:n})}function v(e){var t=e.fluid,n=e.children;return Object(c.jsx)("div",{className:"row".concat(t?"-fluid":""),children:n})}function g(e){var t=e.size,n=e.children;return Object(c.jsx)("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" "),children:n})}n(52);function N(e){var t=e.children;return Object(c.jsx)("div",{className:"list-overflow-container",children:Object(c.jsx)("ul",{className:"list-group",children:t})})}function k(e){var t=e.children;return Object(c.jsx)("li",{className:"list-group-item",children:t})}function y(e){return Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",Object(o.a)({className:"form-control"},e))})}function z(e){return Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("textarea",Object(o.a)({className:"form-control",rows:"20"},e))})}function S(e){return Object(c.jsx)("button",Object(o.a)(Object(o.a)({},e),{},{style:{float:"right",marginBottom:10},className:"btn btn-success",children:e.children}))}var B=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(r.useState)({}),j=Object(l.a)(s,2),u=j[0],h=j[1];function x(){O().then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))}function B(e){var t=e.target,n=t.name,c=t.value;h(Object(o.a)(Object(o.a)({},u),{},{[n]:c}))}return Object(r.useEffect)((function(){x()}),[]),Object(c.jsx)(p,{fluid:!0,children:Object(c.jsxs)(v,{children:[Object(c.jsxs)(g,{size:"md-6",children:[Object(c.jsx)(b,{children:Object(c.jsx)("h1",{children:"What Books Should I Read?"})}),Object(c.jsxs)("form",{children:[Object(c.jsx)(y,{onChange:B,name:"title",placeholder:"Title (required)"}),Object(c.jsx)(y,{onChange:B,name:"author",placeholder:"Author (required)"}),Object(c.jsx)(z,{onChange:B,name:"synopsis",placeholder:"Synopsis (Optional)"}),Object(c.jsx)(S,{disabled:!(u.author&&u.title),onClick:function(e){e.preventDefault(),u.title&&u.author&&m({title:u.title,author:u.author,synopsis:u.synopsis}).then((function(e){return x()})).catch((function(e){return console.log(e)}))},children:"Submit Book"})]})]}),Object(c.jsxs)(g,{size:"md-6 sm-12",children:[Object(c.jsx)(b,{children:Object(c.jsx)("h1",{children:"Books On My List"})}),n.length?Object(c.jsx)(N,{children:n.map((function(e){return Object(c.jsxs)(k,{children:[Object(c.jsx)(a.b,{to:"/books/"+e._id,children:Object(c.jsxs)("strong",{children:[e.title," by ",e.author]})}),Object(c.jsx)(d,{onClick:function(){return t=e._id,void f(t).then((function(e){return x()})).catch((function(e){return console.log(e)}));var t}})]},e._id)}))}):Object(c.jsx)("h3",{children:"No Results to Display"})]})]})})};var w=function(e){var t=Object(r.useState)({}),n=Object(l.a)(t,2),i=n[0],s=n[1],o=Object(j.f)().id;return Object(r.useEffect)((function(){x(o).then((function(e){return s(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(c.jsxs)(p,{fluid:!0,children:[Object(c.jsx)(v,{children:Object(c.jsx)(g,{size:"md-12",children:Object(c.jsx)(b,{children:Object(c.jsxs)("h1",{children:[i.title," by ",i.author]})})})}),Object(c.jsx)(v,{children:Object(c.jsx)(g,{size:"md-10 md-offset-1",children:Object(c.jsxs)("article",{children:[Object(c.jsx)("h1",{children:"Synopsis"}),Object(c.jsx)("p",{children:i.synopsis})]})})}),Object(c.jsx)(v,{children:Object(c.jsx)(g,{size:"md-2",children:Object(c.jsx)(a.b,{to:"/",children:"\u2190 Back to Authors"})})})]})};var C=function(){return Object(c.jsx)(p,{fluid:!0,children:Object(c.jsx)(v,{children:Object(c.jsx)(g,{size:"md-12",children:Object(c.jsxs)(b,{children:[Object(c.jsx)("h1",{children:"404 Page Not Found"}),Object(c.jsx)("h1",{children:Object(c.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})})})};var E=function(){return Object(c.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(c.jsx)("a",{className:"navbar-brand",href:"/",children:"React Reading List"})})};var R=function(){return Object(c.jsx)(a.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(E,{}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:["/","/books"],children:Object(c.jsx)(B,{})}),Object(c.jsx)(j.a,{exact:!0,path:"/books/:id",children:Object(c.jsx)(w,{})}),Object(c.jsx)(j.a,{children:Object(c.jsx)(C,{})})]})]})})};s.a.render(Object(c.jsx)(R,{}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.0f02149b.chunk.js.map