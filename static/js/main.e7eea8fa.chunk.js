(this["webpackJsonpcounter-starter"]=this["webpackJsonpcounter-starter"]||[]).push([[0],[,,function(t,n,o){t.exports={todos:"Todos_todos__2Jdsn",todo:"Todos_todo__3y3pw",todoCount:"Todos_todoCount__29hx7",todoIconWrapper:"Todos_todoIconWrapper__3cSIW",todoActionButton:"Todos_todoActionButton__3gTaS",todoDivider:"Todos_todoDivider__2BpS4"}},,,function(t,n,o){t.exports={info:"Info_info__2d-ke",infoTotal:"Info_infoTotal__2b6O5",deleteAllButton:"Info_deleteAllButton__Nk4Zt"}},,function(t,n,o){t.exports={nav:"Navbar_nav__2imOE",navIcon:"Navbar_navIcon__XDck0",navTitle:"Navbar_navTitle__3a_w2"}},function(t,n,o){t.exports={form:"SearchInput_form__1-yQW",input:"SearchInput_input__2wCi4",addButton:"SearchInput_addButton__3k0fk"}},,,,,function(t,n,o){t.exports={container:"Container_container__3RIox"}},,,function(t,n,o){t.exports={empty:"Empty_empty__3-Yhn"}},,,,,,function(t,n,o){},,,function(t,n,o){"use strict";o.r(n);var e=o(0),a=o(3),c=o.n(a),i=o(12),s=o.n(i),r=(o(22),o(9)),u=o(11),l=o(7),d=o.n(l),j=o.p+"static/media/shopping-icon.7f4eb869.svg",b=function(){return Object(e.jsxs)("nav",{className:d.a.nav,children:[Object(e.jsx)("img",{className:d.a.navIcon,src:j,alt:"shopping icon"}),Object(e.jsx)("h1",{className:d.a.navTitle,children:"Shopping List"})]})},p=o(13),f=o.n(p),_=o(1),h=o.n(_),m=function(t){var n=t.children;return Object(e.jsx)("section",{className:f.a.container,children:n})};m.prototype={children:h.a.node};var v=m,O=o(8),x=o.n(O),g=function(t){var n=t.onSubmit,o=t.onChange,a=t.value;return Object(e.jsxs)("form",{className:x.a.form,onSubmit:n,children:[Object(e.jsx)("input",{onChange:o,value:a,className:x.a.input,type:"text",placeholder:"List"}),Object(e.jsx)("button",{className:x.a.addButton,type:"submit",children:"Add"})]})};g.prototype={onSubmit:h.a.func,onChange:h.a.func,value:h.a.string};var N=g,S=o(5),T=o.n(S),C=function(t){var n=t.todosLength,o=t.totalCounts,a=t.onDelete;return Object(e.jsxs)("div",{className:T.a.info,children:[Object(e.jsx)("div",{className:T.a.infoTotal,children:Object(e.jsx)("p",{children:"Total List: ".concat(n)})}),Object(e.jsx)("div",{className:T.a.infoTotal,children:Object(e.jsx)("p",{children:"Total Counts: ".concat(o)})}),Object(e.jsx)("button",{onClick:a,className:T.a.deleteAllButton,children:"Delete All list"})]})};C.prototype={todosLength:h.a.number,totalCounts:h.a.func,onDelete:h.a.func};var I=C,y=o(14),k=o(15),A=o.n(k),B=o(2),D=o.n(B),L=o.p+"static/media/plus-icon.1b353b20.svg",W=o.p+"static/media/minus-icon.e6e703ff.svg",w=function(t){var n=t.todos,o=t.onSubstraction,a=t.onAddition;return Object(e.jsx)("div",{className:D.a.todos,children:n.map((function(t,n,c){return Object(e.jsxs)("div",{className:A()(D.a.todo,Object(y.a)({},D.a.todoDivider,!(c.length===n+1))),children:[t.title,Object(e.jsxs)("div",{className:D.a.todoIconWrapper,children:[Object(e.jsx)("div",{className:D.a.todoCount,children:t.count}),Object(e.jsx)("button",{onClick:function(){return o(n)},className:D.a.todoActionButton,children:Object(e.jsx)("img",{src:W,alt:"minus icon"})}),Object(e.jsx)("button",{onClick:function(){return a(n)},className:D.a.todoActionButton,children:Object(e.jsx)("img",{src:L,alt:"plus icon"})})]})]},n)}))})};w.prototype={todos:h.a.arrayOf(h.a.shape({title:h.a.string,count:h.a.number})),onSubstraction:h.a.func,onAddition:h.a.func};var E=w,J=o(16),F=o.n(J),M=function(){return Object(e.jsx)("div",{className:F.a.empty,children:"Wah kosong nih..."})};var Q=function(){var t=Object(a.useState)(""),n=Object(u.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)([{title:"Susu Ultra",count:1},{title:"Tahu Sumedang",count:1},{title:"Semangka",count:1}]),s=Object(u.a)(i,2),l=s[0],d=s[1];return Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(b,{}),Object(e.jsxs)(v,{children:[Object(e.jsx)(N,{onSubmit:function(t){if(t.preventDefault(),!o)return alert("No blank list"),!1;var n=[{title:o,count:1}].concat(Object(r.a)(l));d(n),c("")},onChange:function(t){return c(t.target.value)},value:o}),Object(e.jsx)(I,{todosLength:l.length,totalCounts:l.reduce((function(t,n){return t+n.count}),0),onDelete:function(){return d([])}}),l.length>0?Object(e.jsx)(E,{todos:l,onSubstraction:function(t){return function(t){var n=Object(r.a)(l);n[t].count>0?n[t].count-=1:n.splice(t,1),d(n)}(t)},onAddition:function(t){return function(t){var n=Object(r.a)(l);n[t].count+=1,d(n)}(t)}}):Object(e.jsx)(M,{})]})]})};s.a.render(Object(e.jsx)(c.a.StrictMode,{children:Object(e.jsx)(Q,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.e7eea8fa.chunk.js.map