(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{51:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},66:function(e,t,n){e.exports=n(79)},71:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(18),c=n.n(r),l=(n(71),n(22)),i=n(23),u=n(24),m=n(7),s=n(52),d=n(29),E=n(108),f=n(107),h=n(49),p=n.n(h),g=n(97),v=n(98),b=function(e){var t=e.index,n=e.value,r=e.deleteTodo,c=Object(a.useState)(n),l=Object(d.a)(c,2),i=l[0],u=l[1];return o.a.createElement(E.a,{fullWidth:!0,value:i,onChange:function(e){u(e.target.value)},startAdornment:o.a.createElement(f.a,{color:"primary"}),endAdornment:o.a.createElement(v.a,{position:"end"},o.a.createElement(g.a,{color:"secondary",onClick:function(){return r(t)}},o.a.createElement(p.a,null)))})},O=n(99),j=n(50),w=n.n(j),y=n(100),L=n(101),k=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),l=Object(d.a)(c,2),i=l[0],u=l[1],m=function(e){var t=i.filter((function(t,n){return n!==e}));u(t)};return o.a.createElement(O.a,null,o.a.createElement(y.a,{title:"Todo List"}),o.a.createElement(L.a,null,o.a.createElement(E.a,{fullWidth:!0,value:n,onChange:function(e){r(e.target.value)},placeholder:"Add New Item",endAdornment:o.a.createElement(v.a,{position:"end"},o.a.createElement(g.a,{color:"primary",onClick:function(e){u([].concat(Object(s.a)(i),[n])),r("")}},o.a.createElement(w.a,null)))}),i.map((function(e,t){return o.a.createElement(b,{key:e,value:e,index:t,deleteTodo:m})}))))},x=n(51),C=n.n(x),A=function(){return o.a.createElement("section",null,o.a.createElement("img",{src:C.a,className:"App-logo",alt:"logo"}),o.a.createElement(k,null))},T=n(102),N=function(){var e=Object(l.c)((function(e){return e.auth})),t=Object(l.b)();return o.a.createElement(a.Fragment,null,o.a.createElement("h2",null,e?"Login":"Logout"," with redux"),o.a.createElement(T.a,{color:"primary",onClick:function(){return t({type:"LOGIN"})}},"Login"),o.a.createElement(T.a,{color:"secondary",onClick:function(){return t({type:"LOGOUT"})}},"Logout"))},G=n(106),I=n(103),S=n(104),W=n(30),B=function(){var e=Object(l.c)((function(e){return e.auth}));return o.a.createElement(I.a,{position:"static"},o.a.createElement(S.a,null,o.a.createElement(G.a,{display:"flex",justifyContent:"space-between",width:"100%"},o.a.createElement("section",null,o.a.createElement(u.b,{to:"/"},o.a.createElement(W.a,{variant:"h6"},"React Todolist"))),o.a.createElement("section",null,o.a.createElement(u.b,{to:"/"},o.a.createElement(T.a,{color:"inherit"},"Home")),o.a.createElement(u.b,{to:"/login"},o.a.createElement(T.a,{color:"inherit"},e?"Login":"Logout"))))))},J=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":e=!0;break;case"LOGOUT":default:e=!1}return e},U=Object(i.b)({auth:J});n(78);var F=function(){var e=Object(i.c)(U);return o.a.createElement(l.a,{store:e},o.a.createElement(u.a,{basename:"/react-todolist"},o.a.createElement("div",{className:"App"},o.a.createElement(B,null),o.a.createElement(m.c,null,o.a.createElement(m.a,{path:"/",exact:!0,component:A}),o.a.createElement(m.a,{path:"/login",component:N})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.37a61a79.chunk.js.map