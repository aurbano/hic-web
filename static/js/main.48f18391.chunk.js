(this.webpackJsonpdotdot=this.webpackJsonpdotdot||[]).push([[0],{104:function(e,t,a){e.exports={chat:"Chat_chat__LEZtX"}},111:function(e,t,a){e.exports={onlineUsers:"OnlineUsers_onlineUsers__2Umxk"}},114:function(e,t,a){e.exports={login:"Login_login__38Hzs"}},117:function(e,t,a){e.exports=a(184)},151:function(e,t){},183:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),o=a.n(s),c=a(42),l=a(7),u=a(43),i=Object(u.a)((function(e,t){switch(console.log("REDUCER",t),t.type){case"login":if(e.offline||(e.auth.checked=!0),e.error=null,!t.payload){e.auth.loggedIn=!1,e.auth.user=null;break}e.offline=!1,e.auth.loggedIn=!0,e.auth.user=t.payload.user;break;case"offline":e.offline=!0,e.error=null,e.socket.connected=!1;break;case"error":e.error=t.payload;break;case"socketConnected":e.socket.connected=t.payload,e.offline=!1,e.error=null;break;case"user_password":e.auth.user&&(e.auth.user.hasPassword=!0)}})),m={auth:{checked:!1,loggedIn:!1,user:null},socket:{connected:!1,key:null},offline:!1,error:null},d=r.a.createContext({state:m,dispatch:function(){return console.warn("Using default reducer, check StateProvider"),m}}),p=function(e){var t=r.a.useReducer(i,m),a=Object(l.a)(t,2),n={state:a[0],dispatch:a[1]};return r.a.createElement(d.Provider,{value:n},e.children)},f=function(){return r.a.useContext(d)},g=f,h=a(103),v=a.n(h),b="https://dotdotim.herokuapp.com",E=/^[A-Za-z0-9]+(?:[ _][A-Za-z0-9]+)*_?$/i,_=Object(n.createContext)({socket:null}),y=function(e){var t=f(),a=t.state,s=t.dispatch,o=Object(n.useState)(null),c=Object(l.a)(o,2),u=c[0],i=c[1];Object(n.useEffect)((function(){if(s({type:"error",payload:null}),a.auth.loggedIn){var e=v()(b,{reconnection:!0,timeout:2e3});e.on("connect",(function(){s({type:"socketConnected",payload:!0})})),e.on("connect_error",(function(e){s({type:"offline",payload:null})})),e.on("connect_timeout",(function(e){s({type:"offline",payload:null})})),e.on("error",(function(e){s({type:"socketConnected",payload:!1}),s(e?{type:"error",payload:e}:{type:"offline",payload:null})})),i(e)}}),[s,a.auth.loggedIn]);var m={socket:u};return r.a.createElement(_.Provider,{value:m},e.children)},k=a(44),w=a(61),j=a(28),O=a(191),x=a(192),C=a(110),L=a(50),T=a.n(L),N=function(e){var t={};return e.infinite&&(t.animationIterationCount="infinite",t.animationDirection="alternate"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:T.a.logo},r.a.createElement("div",{className:T.a.blob,style:t}),r.a.createElement("div",{className:T.a.blob,style:t})),r.a.createElement("svg",{className:T.a.svgFilter,xmlns:"http://www.w3.org/2000/svg",version:"1.1"},r.a.createElement("defs",null,r.a.createElement("filter",{id:"goo"},r.a.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10",result:"blur"}),r.a.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",result:"goo"}),r.a.createElement("feBlend",{in:"SourceGraphic",in2:"goo"})))))},P=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{infinite:!0}))},S=a(104),F=a.n(S),D=a(26),I=a(5),M=a.n(I),B=a(29),A=a(21),U=a.n(A),G=a(31),R=a(195),H=a(190),Z=function(e){var t,a,n=g().state,s="#".concat(e.message.user.color),o="circle";return e.message.attributes.private&&(o="lock"),r.a.createElement("div",{className:M()(U.a.message,(t={},Object(B.a)(t,U.a.draft,e.message.attributes.draft),Object(B.a)(t,U.a.private,e.message.attributes.private),Object(B.a)(t,U.a.privateDraft,e.message.attributes.private&&e.message.attributes.draft),t)),key:e.message.timestamp.toDateString(),style:{borderLeftColor:s}},r.a.createElement("div",{className:M()(U.a.header,Object(B.a)({},U.a.private,e.message.attributes.private)),style:{color:s,background:s}},e.message.attributes.private&&r.a.createElement(R.a,{placement:"right",overlay:r.a.createElement(H.a,{id:"user-".concat(e.message.user.user_id)},"Private message from ",r.a.createElement("b",null,"@",e.message.user.name),r.a.createElement("br",null),"Only you can see this.")},r.a.createElement(G.a,{icon:o})),!e.message.attributes.private&&r.a.createElement(G.a,{icon:o})),r.a.createElement("div",{className:M()(U.a.timestamp)},e.message.attributes.draft?"now":e.message.timestamp.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})),r.a.createElement("span",{className:M()(U.a.user,Object(B.a)({},U.a.op,e.message.user.user_id===(null===(a=n.auth.user)||void 0===a?void 0:a.user_id))),style:{color:s}},e.message.user.name),r.a.createElement("div",{className:M()(U.a.body)},e.message.message))},z=a(71),V=a.n(z),Y=function(){var e=Object(D.a)({messages:[]}),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(n.useContext)(_).socket,c=Object(n.useRef)(null);return Object(n.useEffect)((function(){c&&c.current&&(c.current.scrollTop=c.current.scrollHeight)}),[a.messages]),Object(n.useEffect)((function(){o&&(o.on("message",(function(e){s((function(t){var a=t.messages.findIndex((function(t){return t.attributes.draft&&t.user.user_id===e.user.user_id}));if(a>-1&&t.messages.splice(a,1),!(e.message.trim().length<1)){if(!e.attributes.draft){var n=t.messages[t.messages.length-1];if(n&&n.user.user_id===e.user.user_id&&n.attributes.private===e.attributes.private)return void(n.message+="\n".concat(e.message))}t.messages.push({timestamp:new Date(e.timestamp),attributes:e.attributes,message:e.message,user:e.user})}}))})),o.on("history",(function(e){s((function(t){t.messages.length>0||(t.messages=e.map((function(e){return e.timestamp=new Date(e.timestamp),e})))}))})))}),[o,s]),r.a.createElement("div",{className:M()(V.a.messages,"my-4"),ref:c},r.a.createElement(O.a,null,r.a.createElement("div",{className:M()(V.a.messageList)},a.messages.map((function(e){return r.a.createElement(Z,{key:e.timestamp.toDateString(),message:e})})))))},q=a(194),J=a(72),K=a.n(J),W=function(){var e=Object(D.a)({message:"",private:!1,to:null}),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(n.useRef)(null),c=Object(n.useContext)(_).socket,u=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!t&&(e.length<1||e.trim().length<1)||null===c||void 0===c||c.emit("message",{message:e,attributes:{draft:t,private:a.private,to:a.to}})};return r.a.createElement(q.a,{noValidate:!0,onSubmit:function(e){e.preventDefault(),a.message.length<1||a.message.trim().length<1||(u(a.message),s((function(e){e.message="",e.private=!1})))},className:M()("container",K.a.textBox,Object(B.a)({},K.a.private,a.private))},r.a.createElement(q.a.Group,{controlId:"chatForm.message"},r.a.createElement(q.a.Control,{as:"input",type:"text",placeholder:"Type a message...",autoFocus:!0,onChange:function(e){e.preventDefault(),clearTimeout(o.current);var t=e.currentTarget.value,a=!1,n=null,r=t.split(" ");r.length>0&&"@"===r[0][0]&&E.test(r[0].substr(1))&&(a=!0,n=r[0].substr(1)),s((function(e){e.message=t,e.private=a,e.to=n})),t.length<3&&"@"===t[0]||(o.current=setTimeout((function(){u(t,!0)}),100))},value:a.message}),r.a.createElement("span",null,r.a.createElement(G.a,{icon:"lock"}))))},X=a(111),Q=a.n(X),$=function(){var e=Object(D.a)({users:[]}),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(n.useContext)(_).socket;return Object(n.useEffect)((function(){o&&o.on("users",(function(e){s((function(t){t.users=e.users}))}))}),[o,s]),r.a.createElement("div",{className:Q.a.onlineUsers},a.users.map((function(e){return r.a.createElement(R.a,{key:e.user_id,placement:"bottom",overlay:r.a.createElement(H.a,{id:"user-".concat(e.user_id)},"@",e.name)},r.a.createElement("span",{style:{color:"#".concat(e.color)}},"\u2022"))})))},ee=a(196),te=a(193),ae=a(62),ne=a.n(ae),re=a(51),se=a.n(re),oe=a(73),ce=a(74),le=a.n(ce),ue="";le.a.defaults.withCredentials=!0;var ie=function(){var e=Object(oe.a)(se.a.mark((function e(t,a,n){var r,s,o;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("'url' is required for fetching data");case 2:return r="".concat(b).concat(t),s={url:r,method:a,data:n,timeout:6e3,withCredentials:!0,xsrfHeaderName:"x-csrf-token",headers:{}},ue.length>0&&(s.headers["x-csrf-token"]=ue),e.prev=5,e.next=8,le()(s);case 8:return(o=e.sent).headers["x-csrf-token"]&&(ue=o.headers["x-csrf-token"]),e.next=12,o.data;case 12:return e.abrupt("return",e.sent);case 15:if(e.prev=15,e.t0=e.catch(5),!e.t0.response){e.next=21;break}throw console.warn("useFetch error on ".concat(a," ").concat(t),e.t0.response),{status:e.t0.response.status,message:me(e.t0),errors:de(e.t0)};case 21:throw console.warn("useFetch network error on ".concat(a," ").concat(t),e.t0),{status:500,message:e.t0.message,errors:[e.t0.message]};case 24:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t,a,n){return e.apply(this,arguments)}}();function me(e){return e.response&&e.response.data?de(e).join(". "):e.message||"An error occurred"}function de(e){return e.response&&e.response.data?function(e){for(var t=0;t<(arguments.length<=1?0:arguments.length-1);t++){var a=t+1<1||arguments.length<=t+1?void 0:arguments[t+1];if(Array.isArray(a))return a;if("string"===typeof a)return[a]}return[e]}("An error occurred",e.response.data,e.response.data.errors,e.response.data.error):[e.message||"An error occurred"]}var pe=function(){var e=g(),t=e.state,a=e.dispatch,s=Object(n.useState)(!1),o=Object(l.a)(s,2),c=o[0],u=o[1],i=Object(n.useState)(!1),m=Object(l.a)(i,2),d=m[0],p=m[1],f=Object(n.useState)(""),h=Object(l.a)(f,2),v=h[0],b=h[1],E=Object(n.useState)(""),_=Object(l.a)(E,2),y=_[0],k=_[1],w=function(){return u(!1)},j=ne.a.unlocked,O="lock-open",x="Set a password to keep your username",C="Claim Username";return t.auth.user&&t.auth.user.hasPassword&&(j=ne.a.locked,O="lock",x="Change your password",C="Update Password"),r.a.createElement("div",{className:ne.a.passwordLock},r.a.createElement(R.a,{placement:"bottom",delay:500,overlay:r.a.createElement(H.a,{id:"passwordLock"},x)},r.a.createElement(ee.a,{variant:"link",className:j,onClick:function(){return u(!0)}},r.a.createElement(G.a,{icon:O}))),r.a.createElement(te.a,{show:c,onHide:w},r.a.createElement(q.a,{noValidate:!0,validated:d,onSubmit:function(e){(e.preventDefault(),e.stopPropagation(),p(!0),e.currentTarget.checkValidity())&&ie("/password","POST",{password:v,repeatPassword:y}).then((function(){a({type:"user_password",payload:!0}),u(!1),p(!1),b(""),k("")})).catch((function(e){a({type:"error",payload:e.errors.join(", ")})}))}},r.a.createElement(te.a.Header,{closeButton:!0},r.a.createElement(te.a.Title,null,C)),r.a.createElement(te.a.Body,null,r.a.createElement(q.a.Group,{controlId:"pwd.new"},r.a.createElement(q.a.Control,{as:"input",type:"password",placeholder:"Password...",autoFocus:!0,required:!0,minLength:6,onChange:function(e){b(e.currentTarget.value)},value:v}),r.a.createElement(q.a.Control.Feedback,{type:"invalid"},"The password is too short. Minimum length is 6 characters.")),r.a.createElement(q.a.Group,{controlId:"pwd.new"},r.a.createElement(q.a.Control,{as:"input",type:"password",placeholder:"Repeat Password...",required:!0,minLength:6,pattern:v,onChange:function(e){k(e.currentTarget.value)},value:y}),r.a.createElement(q.a.Control.Feedback,{type:"invalid"},"The passwords don't match!"))),r.a.createElement(te.a.Footer,null,r.a.createElement(ee.a,{variant:"secondary",onClick:w},"Close"),r.a.createElement(ee.a,{type:"submit",variant:"primary"},"Set password")))))},fe=function(){var e=f().state,t=r.a.createElement(P,null);return e.socket.connected&&(t=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:F.a.chat},r.a.createElement(O.a,null,r.a.createElement(x.a,null,r.a.createElement(C.a,null,r.a.createElement(pe,null)),r.a.createElement(C.a,null,r.a.createElement($,null)))),r.a.createElement(Y,null),r.a.createElement(W,null)))),t},ge=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null))},he=function(e){var t=f().state;return t.auth.checked?t.auth.loggedIn?r.a.createElement(j.b,{path:e.path,exact:e.exact,component:e.component}):r.a.createElement(j.a,{to:"/login"}):r.a.createElement(ge,null)},ve=function(e){var t=f().state;return t.auth.checked?t.auth.loggedIn?r.a.createElement(j.a,{to:"/"}):r.a.createElement(j.b,{path:e.path,exact:e.exact,component:e.component}):r.a.createElement(ge,null)},be=a(77),Ee=a.n(be),_e=function(){var e=f().state;if(!e.offline&&!e.error)return null;var t=e.error;return Array.isArray(t)&&(t=t.join(". ")),"string"!==typeof t&&(t=String(t)),e.error?r.a.createElement("div",{className:Ee.a.offline},"Error: ",t):r.a.createElement("div",{className:Ee.a.offline},"You seem to be offline! Please try again later")},ye=a(114),ke=a.n(ye),we=function(){var e=f().dispatch,t=Object(D.a)({username:"",password:"",hasPassword:!1,loading:!1}),a=Object(l.a)(t,2),n=a[0],s=a[1];return r.a.createElement(O.a,{className:M()(ke.a.login,"mt-4")},r.a.createElement(N,null),r.a.createElement(q.a,{noValidate:!0,onSubmit:function(t){if(t.preventDefault(),!n.loading){s((function(e){e.loading=!0}));var a={username:n.username,password:n.password};ie("/auth","POST",a).then((function(t){if(!t||!t.user.user_id)return console.warn("Invalid user object"),void e({type:"login",payload:t});e({type:"login",payload:t})})).catch((function(t){console.log("login fail reason",t),400!==t.status&&e({type:"error",payload:t.errors.join(", ")}),s((function(e){e.loading=!1,400===t.status&&(e.hasPassword=!0)}))}))}}},r.a.createElement(q.a.Group,{controlId:"loginForm.username"},r.a.createElement(q.a.Control,{as:"input",type:"text",placeholder:"What's your name?",disabled:n.loading,autoFocus:!0,onChange:function(e){var t=e.currentTarget.value;s((function(e){e.username=t}))},value:n.username}),n.hasPassword&&r.a.createElement(q.a.Control,{as:"input",className:"mt-2",type:"password",placeholder:"Password...",disabled:n.loading,autoFocus:!0,onChange:function(e){var t=e.currentTarget.value;s((function(e){e.password=t}))},value:n.password}),r.a.createElement("button",{type:"submit",style:{visibility:"hidden"}},"Login"))))},je=function e(t){ie("/auth","GET").then((function(e){if(!e||!e.user.user_id)return console.warn("Invalid user object"),void t({type:"login",payload:null});t({type:"login",payload:e})})).catch((function(a){console.log("Login check failed",a),"Network Error"===a.message?(t({type:"offline",payload:null}),setTimeout((function(){e(t)}),2e3)):(t({type:"error",payload:a.errors.join(", ")}),t({type:"login",payload:null}))}))},Oe=function(){var e=g(),t=e.state,a=e.dispatch;return Object(n.useEffect)((function(){t.auth.checked||je(a)}),[t.auth.checked,a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(_e,null),r.a.createElement(j.d,null,r.a.createElement(ve,{path:"/login",component:we}),r.a.createElement(he,{path:"/",component:fe})))},xe=a(115),Ce=a.n(xe),Le=function(){var e=Object(n.useContext)(_).socket,t=Object(n.useState)(!0),a=Object(l.a)(t,2),s=a[0],o=a[1],c=Object(n.useState)(!1),u=Object(l.a)(c,2),i=u[0],m=u[1],d=Object(n.useCallback)((function(){s||m(!0)}),[s]);return Object(n.useEffect)((function(){e&&e.on("message",d)}),[e,d]),window.onfocus=function(){m(!1),o(!0)},window.onblur=function(){o(!1)},r.a.createElement(Ce.a,null,r.a.createElement("title",null,i?"\u2022 dotdot":"dotdot"))};a(183);k.b.add(w.b,w.c,w.a);var Te=r.a.createElement(c.a,{basename:"/dotdot/"},r.a.createElement(p,null,r.a.createElement(y,null,r.a.createElement(Le,null),r.a.createElement(Oe,null))));o.a.render(Te,document.getElementById("root"))},21:function(e,t,a){e.exports={message:"Message_message__2v30T",header:"Message_header__3wUCX",user:"Message_user__3HofW",timestamp:"Message_timestamp__2armv",body:"Message_body__32TEj",op:"Message_op__3lLYM",draft:"Message_draft__1zB7h",private:"Message_private__ORZ48",privateDraft:"Message_privateDraft__YRrde"}},50:function(e,t,a){e.exports={logo:"Logo_logo__30xDu",svgFilter:"Logo_svgFilter__1s9i7",blob:"Logo_blob__1iSwo","blob-first":"Logo_blob-first__3YKrD","blob-second":"Logo_blob-second__2r5Nx"}},62:function(e,t,a){e.exports={passwordLock:"PasswordLock_passwordLock__2FTiA",unlocked:"PasswordLock_unlocked__21MTQ",pulse:"PasswordLock_pulse__2T-_F",locked:"PasswordLock_locked__1mCl-"}},71:function(e,t,a){e.exports={messages:"Messages_messages__tCmp1",messageList:"Messages_messageList__3cw_-"}},72:function(e,t,a){e.exports={textBox:"TextBox_textBox__McZeC",private:"TextBox_private__1kesE"}},77:function(e,t,a){e.exports={offline:"OfflineCheck_offline__2vKbm"}}},[[117,1,2]]]);
//# sourceMappingURL=main.48f18391.chunk.js.map