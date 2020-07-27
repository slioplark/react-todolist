(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{100:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),c=(a(100),a(32)),i=a(36),u=a(39),m=a(11),s=a(78),d=a(44),E=a(139),f=a(154),h=a(71),p=a.n(h),v=a(142),g=a(143),b=function(e){var t=e.index,a=e.value,l=e.deleteTodo,o=Object(n.useState)(a),c=Object(d.a)(o,2),i=c[0],u=c[1];return r.a.createElement(E.a,{fullWidth:!0,value:i,onChange:function(e){u(e.target.value)},startAdornment:r.a.createElement(f.a,{color:"primary"}),endAdornment:r.a.createElement(g.a,{position:"end"},r.a.createElement(v.a,{color:"secondary",onClick:function(){return l(t)}},r.a.createElement(p.a,null)))})},O=a(145),N=a(72),y=a.n(N),j=a(146),w=a(147),C=a(144),k=Object(C.a)((function(e){return{root:{minHeight:"50vh"}}})),L=function(){var e=k(),t=Object(n.useState)(""),a=Object(d.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)([]),i=Object(d.a)(c,2),u=i[0],m=i[1],f=function(e){var t=u.filter((function(t,a){return a!==e}));m(t)};return r.a.createElement(O.a,{className:e.root},r.a.createElement(j.a,{title:"Todo List"}),r.a.createElement(w.a,null,r.a.createElement(E.a,{fullWidth:!0,value:l,onChange:function(e){o(e.target.value)},placeholder:"Add New Item",endAdornment:r.a.createElement(g.a,{position:"end"},r.a.createElement(v.a,{color:"primary",onClick:function(e){m([].concat(Object(s.a)(u),[l])),o("")}},r.a.createElement(y.a,null)))}),u.map((function(e,t){return r.a.createElement(b,{key:e,value:e,index:t,deleteTodo:f})}))))},T=a(73),A=a.n(T),W=function(){return r.a.createElement("section",null,r.a.createElement("img",{src:A.a,className:"App-logo",alt:"logo"}),r.a.createElement(L,null))},x=a(77),R=a(149),S=a(152),G=a(76),I=a.n(G),M=a(148),F=Object(C.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1,0)}}}})),V=function(){var e=F(),t=Object(c.c)((function(e){return e.auth})),a=Object(c.b)(),n=Object(x.a)({initialValues:{lastName:"",firstName:""}});return r.a.createElement(O.a,{className:e.root},r.a.createElement(w.a,null,r.a.createElement(I.a,{fontSize:"large"}),r.a.createElement(S.a,{fullWidth:!0,name:"lastName",label:"Last Name",value:n.values.lastName,variant:"outlined",onChange:n.handleChange}),r.a.createElement(S.a,{fullWidth:!0,name:"firstName",label:"First Name",value:n.values.firstName,variant:"outlined",onChange:n.handleChange})),r.a.createElement(M.a,null,t?r.a.createElement(R.a,{fullWidth:!0,color:"secondary",onClick:function(){a({type:"LOGOUT"}),a({type:"REMOVE"}),n.resetForm({})}},"Logout"):r.a.createElement(R.a,{fullWidth:!0,color:"primary",onClick:function(){a({type:"LOGIN"}),a({type:"CREATE",payload:n.values})}},"Login")))},B=a(153),H=a(150),J=a(151),U=a(45),z=function(){var e=Object(c.c)((function(e){return e.profile})),t=Object(c.c)((function(e){return e.auth}));return r.a.createElement(H.a,{position:"static"},r.a.createElement(J.a,null,r.a.createElement(B.a,{display:"flex",justifyContent:"space-between",width:"100%"},r.a.createElement("section",null,r.a.createElement(u.b,{to:"/"},r.a.createElement(U.a,{variant:"h6"},"React Todolist"))),r.a.createElement("section",null,r.a.createElement(u.b,{to:"/"},r.a.createElement(R.a,{color:"inherit"},"Home")),r.a.createElement(u.b,{to:"/login"},r.a.createElement(R.a,{color:"inherit"},t?"".concat(e.lastName," ").concat(e.firstName):"Login"))))))},$=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return!0;case"LOGOUT":return!1;default:return e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case"CREATE":return{lastName:a.lastName,firstName:a.firstName};case"REMOVE":return{lastName:"",firstName:""};default:return e}},D=Object(i.b)({auth:$,profile:q});a(107);var K=function(){var e=Object(i.c)(D);return r.a.createElement(c.a,{store:e},r.a.createElement(u.a,{basename:"/react-todolist"},r.a.createElement("div",{className:"App"},r.a.createElement(z,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:W}),r.a.createElement(m.a,{path:"/login",component:V})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},95:function(e,t,a){e.exports=a(108)}},[[95,1,2]]]);
//# sourceMappingURL=main.5b663b57.chunk.js.map