(this.webpackJsonpgamerules=this.webpackJsonpgamerules||[]).push([[0],{118:function(e,t,c){},149:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(36),i=c.n(a),s=(c(118),c(51)),j=c(166),h=c(4),u=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(j.a.Item,{children:[e.chapter.id," ",e.chapter.chapter]},e.chapter.id)})},o=c(48),b=function(e){var t=e.chapters;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(o.b,{to:"/chapters/".concat(e.id),children:Object(h.jsx)(j.a,{children:Object(h.jsx)(u,{chapter:e},e.id)})})},e.id)}))})},d=c(10),l=c(78),O=c.n(l),x="http://localhost:3005/api/chapters/",f=function(){return console.log("At service!"),O.a.get(x).then((function(e){return e.data}))},p=function(e){var t=e.slice(0,-1);return O.a.get(x+t).then((function(e){return e.data}))},m=function(e){return O.a.post(x+"search"+"?term=".concat(e)).then((function(e){return e.data}))},g=function(){var e=Object(d.f)().id,t=Object(n.useState)([]),c=Object(s.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){p(e).then((function(e){a(e.rules)}))}),[e]),Object(h.jsx)(h.Fragment,{children:r.map((function(e){return Object(h.jsxs)("li",{children:[e.id," ",e.content]},e.id)}))})},v=c(169),S=c(170),F=c(163),I=c(165),k=c(167),C=c(164),E=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),i=Object(s.a)(a,2),j=i[0],u=i[1],l=Object(n.useState)(""),O=Object(s.a)(l,2),x=O[0],p=O[1];Object(n.useEffect)((function(){""!==x?m(x).then((function(e){u(e)})):f().then((function(e){r(e)}))}),[x]);var E=function(){p("")},w=j.map((function(e){return Object(h.jsxs)(v.a,{children:[Object(h.jsx)("ul",{children:Object(h.jsxs)("li",{children:[e.id," ",e.content]},e.id)})," "]},e.id)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(S.a,{as:"h2",textAlign:"center",children:" Game Rules"}),Object(h.jsxs)(o.a,{children:[Object(h.jsx)(F.a,{children:Object(h.jsxs)(I.a,{children:[Object(h.jsx)(I.a.Item,{as:o.b,to:"/",onClick:E,children:"Chapters"}),Object(h.jsx)(I.a.Item,{position:"right",children:Object(h.jsx)(k.a,{icon:"search",placeholder:"Search...",onChange:function(e){e.preventDefault(),p(e.target.value)},onRest:E})})]})}),Object(h.jsx)(C.a,{}),x&&w,Object(h.jsx)(F.a,{children:Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{path:"/chapters/:id",children:Object(h.jsx)(g,{})}),Object(h.jsx)(d.a,{path:"/",children:Object(h.jsx)(b,{chapters:c})})]})})]})]})};c(148);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.8659ff82.chunk.js.map