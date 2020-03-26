(this.webpackJsonpdotdot=this.webpackJsonpdotdot||[]).push([[0],{120:function(e,t){},125:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(66),l=a.n(o),c=a(19),s=a(67),u=a.n(s),i=a(7),m=a(20),f=Object(m.a)((function(e,t){switch(console.info("REDUCER: ",t.type),console.log(t.payload),t.type){case"login":if(e.auth.checked=!0,!t.payload){e.auth.loggedIn=!1,e.auth.user=null,e.auth.token=null;break}e.auth.loggedIn=!0,e.auth.user=t.payload.user,e.auth.token=t.payload.token;break;case"offline":e.offline=!0,e.error=null;break;case"error":e.error=t.payload;break;case"socketConnected":e.connected=t.payload}})),d={auth:{checked:!0,loggedIn:!1,user:null,token:null},offline:!1,connected:!1,error:null,messages:[],users:[]},p=r.a.createContext({state:d,dispatch:function(){return console.warn("Using default reducer, check StateProvider"),d}}),g=function(e){var t=r.a.useReducer(f,d),a=Object(i.a)(t,2),n={state:a[0],dispatch:a[1]};return r.a.createElement(p.Provider,{value:n},e.children)},h=function(){return r.a.useContext(p)},E=a(68),v=a.n(E),y="https://dotdotim.herokuapp.com",b=Object(n.createContext)({socket:null}),k=function(e){var t=h(),a=t.state,o=t.dispatch,l=Object(n.useState)(null),c=Object(i.a)(l,2),s=c[0],u=c[1];Object(n.useEffect)((function(){if(o({type:"error",payload:null}),a.auth.loggedIn){var e=v()(y,{reconnection:!0,timeout:2e3,query:{token:a.auth.token}});e.on("connect",(function(){o({type:"socketConnected",payload:!0})})),e.on("connect_error",(function(e){o({type:"offline",payload:null})})),e.on("connect_timeout",(function(e){o({type:"offline",payload:null})})),e.on("error",(function(e){o({type:"login",payload:null}),o({type:"socketConnected",payload:!1}),o(e?{type:"error",payload:e}:{type:"offline",payload:null})})),u(e)}}),[o,a.auth.loggedIn,a.auth.token]);var m={socket:s};return r.a.createElement(b.Provider,{value:m},e.children)},x=a(21),j=a(6),O=a(69),C=a(36),w=a(12),I=a(148),F=a(70),N=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,{icon:"spinner",pulse:!0})," ",e.text||"Loading")},T=(a(125),a(151)),L=a(16),P=function(e){var t="#".concat(e.message.user.color),a={borderLeftWidth:"4px",borderLeftColor:t};return e.draft&&(a.color="#aaa"),r.a.createElement(T.a.Item,{className:"d-flex justify-content-between align-items-center",key:e.message.id,style:a},e.message.message,r.a.createElement("span",{style:{color:t}},"@",e.message.user.name))},S=function(){var e=Object(L.a)({messages:[],drafts:{}}),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(n.useContext)(b).socket;return Object(n.useEffect)((function(){l&&(l.on("message",(function(e){o((function(t){t.messages.push({id:t.messages.length,message:e.message,user:e.user}),delete t.drafts[e.user.uuid]}))})),l.on("draft",(function(e){o((function(t){e.message.trim().length<1?delete t.drafts[e.user.uuid]:t.drafts[e.user.uuid]=e}))})))}),[l,o]),r.a.createElement(T.a,{className:"my-4"},a.messages.map((function(e){return r.a.createElement(P,{message:e})})),Object.values(a.drafts).map((function(e){return r.a.createElement(P,{message:e,draft:!0})})))},_=a(150),D=function(){var e=Object(L.a)({message:""}),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(n.useRef)(null),c=Object(n.useContext)(b).socket;return r.a.createElement(_.a,{noValidate:!0,onSubmit:function(e){e.preventDefault(),null===c||void 0===c||c.emit("message",{message:a.message}),o((function(e){e.message=""}))}},r.a.createElement(_.a.Group,{controlId:"chatForm.message"},r.a.createElement(_.a.Label,null,"Message"),r.a.createElement(_.a.Control,{as:"input",type:"text",autoFocus:!0,onChange:function(e){e.preventDefault(),clearTimeout(l.current);var t=e.currentTarget.value;o((function(e){e.message=t})),l.current=setTimeout((function(){var e;e=t,null===c||void 0===c||c.emit("draft",{message:e})}),100)},value:a.message})))},R=function(){var e=h().state,t=r.a.createElement(N,null);return e.connected&&(t=r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(D,null))),r.a.createElement(I.a,null,t)},q=a(149),U=a(75),G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",{className:"bg-angle"}),r.a.createElement("section",null,r.a.createElement(I.a,null,r.a.createElement(q.a,null,r.a.createElement(U.a,{md:{span:6,offset:3}},r.a.createElement("div",{className:"text-center mt-5"},r.a.createElement("h4",{className:"my-2",style:{color:"#fff"}},r.a.createElement(N,null)))))))))},J=function(e){var t=h().state;return t.auth.checked?t.auth.loggedIn?r.a.createElement(w.b,{path:e.path,exact:e.exact,component:e.component}):r.a.createElement(w.a,{to:"/login"}):r.a.createElement(G,null)},V=function(e){var t=h().state;return t.auth.checked?t.auth.loggedIn?r.a.createElement(w.a,{to:"/"}):r.a.createElement(w.b,{path:e.path,exact:e.exact,component:e.component}):r.a.createElement(G,null)},B=a(39),H=a.n(B),K=function(){var e=h().state;return e.offline||e.error?e.error?r.a.createElement("div",{className:H.a.offline},"Error: ",e.error):r.a.createElement("div",{className:H.a.offline},"You seem to be offline! Please try again later"):null},M=a(22),W=a.n(M),Y=a(40),z=a(41),A=a.n(z),Q="";A.a.defaults.withCredentials=!0;var X=function(){var e=Object(Y.a)(W.a.mark((function e(t,a,n){var r,o,l;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("'url' is required for fetching data");case 2:return r="".concat(y).concat(t),o={url:r,method:a,data:n,timeout:6e3,withCredentials:!0,xsrfHeaderName:"x-csrf-token",headers:{}},Q.length>0&&(o.headers["x-csrf-token"]=Q),e.prev=5,e.next=8,A()(o);case 8:return(l=e.sent).headers["x-csrf-token"]&&(Q=l.headers["x-csrf-token"]),e.next=12,l.data;case 12:return e.abrupt("return",e.sent);case 15:if(e.prev=15,e.t0=e.catch(5),!e.t0.response){e.next=23;break}throw console.warn("useFetch error",e.t0.response),{status:e.t0.response.status,message:e.t0.response.data?e.t0.response.data.errors.join(", "):e.t0.message,errors:e.t0.response.data.errors};case 23:throw console.warn("useFetch error",e.t0),{status:500,message:e.t0.message,errors:[e.t0.message]};case 26:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t,a,n){return e.apply(this,arguments)}}(),Z=function(){var e=h().dispatch,t=Object(L.a)({username:""}),a=Object(i.a)(t,2),n=a[0],o=a[1];return r.a.createElement(I.a,{className:"mt-4"},r.a.createElement(_.a,{noValidate:!0,onSubmit:function(t){t.preventDefault();var a={username:n.username};X("/auth","POST",a).then((function(t){if(!t||!t.user.uuid)return console.warn("Invalid user object"),void e({type:"login",payload:null});e({type:"login",payload:t})})).catch((function(t){e({type:"offline",payload:null}),e({type:"login",payload:null})}))}},r.a.createElement(_.a.Group,{controlId:"loginForm.username"},r.a.createElement(_.a.Label,null,"User name"),r.a.createElement(_.a.Control,{as:"input",type:"text",autoFocus:!0,onChange:function(e){var t=e.currentTarget.value;o((function(e){e.username=t}))},value:n.username}))))},$=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"content"},r.a.createElement(K,null),r.a.createElement(w.d,null,r.a.createElement(V,{path:"/login",component:Z}),r.a.createElement(J,{path:"/",component:R}))))};a(146);!function(){var e=C.b,t=C.a;x.b.add(j.f,j.h,j.d,j.g,j.e,j.b,j.c,j.o,j.n,j.m,j.l,O.a,j.j,j.a,e,t,j.p,j.k,j.q,j.i)}();var ee=r.a.createElement(c.a,{basename:"/dotdot/"},r.a.createElement(u.a,{titleTemplate:"%s | dotdot"}),r.a.createElement(g,null,r.a.createElement(k,null,r.a.createElement($,null))));l.a.render(ee,document.getElementById("root"))},39:function(e,t,a){e.exports={offline:"OfflineCheck_offline__2vKbm"}},80:function(e,t,a){e.exports=a(147)}},[[80,1,2]]]);
//# sourceMappingURL=main.21d17987.chunk.js.map