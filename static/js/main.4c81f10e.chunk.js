(this.webpackJsonpdotdot=this.webpackJsonpdotdot||[]).push([[0],{106:function(e,t,a){e.exports={chat:"Chat_chat__LEZtX"}},113:function(e,t,a){e.exports={onlineUsers:"OnlineUsers_onlineUsers__2Umxk"}},115:function(e,t,a){e.exports={login:"Login_login__38Hzs"}},119:function(e,t,a){e.exports=a(186)},153:function(e,t){},185:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),o=a.n(s),c=a(43),l=a(7),u=a(44),i=Object(u.a)((function(e,t){switch(console.log("REDUCER",t),t.type){case"login":if(e.offline||(e.auth.checked=!0),e.error=null,!t.payload){e.auth.loggedIn=!1,e.auth.user=null;break}e.offline=!1,e.auth.loggedIn=!0,e.auth.user=t.payload.user;break;case"offline":e.offline=!0,e.error=null,e.socket.connected=!1;break;case"error":e.error=t.payload;break;case"socketConnected":e.socket.connected=t.payload,e.offline=!1,e.error=null;break;case"user_password":e.auth.user&&(e.auth.user.hasPassword=!0)}})),m={auth:{checked:!1,loggedIn:!1,user:null},socket:{connected:!1,key:null},offline:!1,error:null},d=r.a.createContext({state:m,dispatch:function(){return console.warn("Using default reducer, check StateProvider"),m}}),p=function(e){var t=r.a.useReducer(i,m),a=Object(l.a)(t,2),n={state:a[0],dispatch:a[1]};return r.a.createElement(d.Provider,{value:n},e.children)},f=function(){return r.a.useContext(d)},g=f,h=a(104),v=a.n(h),b="https://dotdotim.herokuapp.com",E=/^[A-Za-z0-9]+(?:[ _][A-Za-z0-9]+)*_?$/i,_=Object(n.createContext)({socket:null}),y=function(e){var t=f(),a=t.state,s=t.dispatch,o=Object(n.useState)(null),c=Object(l.a)(o,2),u=c[0],i=c[1];Object(n.useEffect)((function(){if(s({type:"error",payload:null}),a.auth.loggedIn){var e=v()(b,{reconnection:!0,timeout:2e3});e.on("connect",(function(){s({type:"socketConnected",payload:!0})})),e.on("connect_error",(function(e){s({type:"offline",payload:null})})),e.on("connect_timeout",(function(e){s({type:"offline",payload:null})})),e.on("error",(function(e){s({type:"socketConnected",payload:!1}),s(e?{type:"error",payload:e}:{type:"offline",payload:null})})),i(e)}}),[s,a.auth.loggedIn]);var m={socket:u};return r.a.createElement(_.Provider,{value:m},e.children)},k=a(45),w=a(31),j=a(105),x=a(30),O=a(193),C=a(194),L=a(112),T=a(51),N=a.n(T),F=function(e){var t={};return e.infinite&&(t.animationIterationCount="infinite",t.animationDirection="alternate"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:N.a.logo},r.a.createElement("div",{className:N.a.blob,style:t}),r.a.createElement("div",{className:N.a.blob,style:t})),r.a.createElement("svg",{className:N.a.svgFilter,xmlns:"http://www.w3.org/2000/svg",version:"1.1"},r.a.createElement("defs",null,r.a.createElement("filter",{id:"goo"},r.a.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10",result:"blur"}),r.a.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",result:"goo"}),r.a.createElement("feBlend",{in:"SourceGraphic",in2:"goo"})))))},P=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{infinite:!0}))},S=a(106),I=a.n(S),M=a(28),A=a(5),D=a.n(A),B=a(27),U=a(21),R=a.n(U),G=a(24),z=a(197),H=a(192),Z=function(e){var t,a,n=g().state,s="#".concat(e.message.user.color),o="dotdot"===e.message.user.user_id,c="circle";return e.message.user.user_id===(null===(t=n.auth.user)||void 0===t?void 0:t.user_id)?c=["far","dot-circle"]:e.message.attributes.draft&&(c="circle-notch"),e.message.attributes.private&&(c="lock"),o&&(c="cog"),r.a.createElement("div",{className:D()(R.a.message,(a={},Object(B.a)(a,R.a.system,o),Object(B.a)(a,R.a.draft,e.message.attributes.draft),Object(B.a)(a,R.a.private,e.message.attributes.private),Object(B.a)(a,R.a.privateDraft,e.message.attributes.private&&e.message.attributes.draft),a)),key:e.message.timestamp.toDateString()},r.a.createElement("div",{className:D()(R.a.icon,Object(B.a)({},R.a.private,e.message.attributes.private)),style:{color:s,background:s}},e.message.attributes.private&&r.a.createElement(z.a,{placement:"right",overlay:r.a.createElement(H.a,{id:"user-".concat(e.message.user.user_id)},"Private message from ",r.a.createElement("b",null,"@",e.message.user.name),r.a.createElement("br",null),"Only you can see this.")},r.a.createElement(G.a,{icon:c})),!e.message.attributes.private&&r.a.createElement(G.a,{icon:c,spin:e.message.attributes.draft})),r.a.createElement("div",{className:D()(R.a.timestamp)},e.message.attributes.draft?"now":e.message.timestamp.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})),r.a.createElement("span",{className:D()(R.a.user),style:{color:s}},e.message.user.name),r.a.createElement("div",{className:D()(R.a.body)},e.message.message))},Y=a(73),V=a.n(Y),X=function(){var e=Object(M.a)({messages:[]}),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(n.useContext)(_).socket,c=Object(n.useRef)(null);return Object(n.useEffect)((function(){c&&c.current&&(c.current.scrollTop=c.current.scrollHeight)}),[a.messages]),Object(n.useEffect)((function(){o&&(o.on("message",(function(e){s((function(t){var a=t.messages.findIndex((function(t){return t.attributes.draft&&t.user.user_id===e.user.user_id}));if(a>-1&&t.messages.splice(a,1),!(e.message.trim().length<1)){if(!e.attributes.draft){var n=t.messages[t.messages.length-1];if(n&&n.user.user_id===e.user.user_id&&n.attributes.private===e.attributes.private)return n.message+="\n".concat(e.message),void(n.timestamp=new Date(e.timestamp))}t.messages.push({timestamp:new Date(e.timestamp),attributes:e.attributes,message:e.message,user:e.user})}}))})),o.on("history",(function(e){s((function(t){t.messages.length>0||(t.messages=e.map((function(e){return e.timestamp=new Date(e.timestamp),e})))}))})))}),[o,s]),r.a.createElement("div",{className:D()(V.a.messages,"my-4"),ref:c},r.a.createElement(O.a,null,r.a.createElement("div",{className:D()(V.a.messageList)},a.messages.map((function(e){return r.a.createElement(Z,{key:e.timestamp.toDateString(),message:e})})))))},q=a(196),W=a(63),J=a.n(W),K=function(){var e,t=Object(M.a)({message:"",private:!1,to:null,isCommand:!1}),a=Object(l.a)(t,2),s=a[0],o=a[1],c=Object(n.useRef)(null),u=Object(n.useContext)(_).socket,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t||!(e.length<1||e.trim().length<1)){var a="message";s.isCommand&&(a="command"),null===u||void 0===u||u.emit(a,{message:e,attributes:{draft:t,private:s.private,to:s.to}})}},m="lock";return s.isCommand&&(m="code"),r.a.createElement(q.a,{noValidate:!0,onSubmit:function(e){e.preventDefault(),s.message.length<1||s.message.trim().length<1||(i(s.message),o((function(e){e.message="",e.private=!1,e.isCommand=!1})))},className:D()("container",J.a.textBox,(e={},Object(B.a)(e,J.a.private,s.private),Object(B.a)(e,J.a.command,s.isCommand),e))},r.a.createElement(q.a.Group,{controlId:"chatForm.message"},r.a.createElement(q.a.Control,{as:"input",type:"text",placeholder:"Type a message...",autoFocus:!0,onChange:function(e){e.preventDefault(),clearTimeout(c.current);var t=e.currentTarget.value,a=!1,n=!1,r=null;if("/"===t[0])a=!0;else{var s=t.split(" ");s.length>0&&"@"===s[0][0]&&E.test(s[0].substr(1))&&(n=!0,r=s[0].substr(1))}o((function(e){e.message=t,e.private=n,e.to=r,e.isCommand=a})),n||a||(c.current=setTimeout((function(){i(t,!0)}),100))},value:s.message}),r.a.createElement("span",null,r.a.createElement(G.a,{icon:m}))))},Q=a(113),$=a.n(Q),ee=function(){var e=g().state,t=Object(M.a)({users:[]}),a=Object(l.a)(t,2),s=a[0],o=a[1],c=Object(n.useContext)(_).socket;return Object(n.useEffect)((function(){c&&c.on("users",(function(e){o((function(t){t.users=e.users}))}))}),[c,o]),r.a.createElement("div",{className:$.a.onlineUsers},s.users.map((function(t){var a,n="circle";return t.user_id===(null===(a=e.auth.user)||void 0===a?void 0:a.user_id)&&(n=["far","dot-circle"]),r.a.createElement(z.a,{key:t.user_id,placement:"bottom",overlay:r.a.createElement(H.a,{id:"user-".concat(t.user_id)},"@",t.name)},r.a.createElement("span",{style:{color:"#".concat(t.color)}},r.a.createElement(G.a,{icon:n})))})))},te=a(198),ae=a(195),ne=a(64),re=a.n(ne),se=a(52),oe=a.n(se),ce=a(74),le=a(75),ue=a.n(le),ie="";ue.a.defaults.withCredentials=!0;var me=function(){var e=Object(ce.a)(oe.a.mark((function e(t,a,n){var r,s,o;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new Error("'url' is required for fetching data");case 2:return r="".concat(b).concat(t),s={url:r,method:a,data:n,timeout:6e3,withCredentials:!0,xsrfHeaderName:"x-csrf-token",headers:{}},ie.length>0&&(s.headers["x-csrf-token"]=ie),e.prev=5,e.next=8,ue()(s);case 8:return(o=e.sent).headers["x-csrf-token"]&&(ie=o.headers["x-csrf-token"]),e.next=12,o.data;case 12:return e.abrupt("return",e.sent);case 15:if(e.prev=15,e.t0=e.catch(5),!e.t0.response){e.next=21;break}throw console.warn("useFetch error on ".concat(a," ").concat(t),e.t0.response),{status:e.t0.response.status,message:de(e.t0),errors:pe(e.t0)};case 21:throw console.warn("useFetch network error on ".concat(a," ").concat(t),e.t0),{status:500,message:e.t0.message,errors:[e.t0.message]};case 24:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(t,a,n){return e.apply(this,arguments)}}();function de(e){return e.response&&e.response.data?pe(e).join(". "):e.message||"An error occurred"}function pe(e){return e.response&&e.response.data?function(e){for(var t=0;t<(arguments.length<=1?0:arguments.length-1);t++){var a=t+1<1||arguments.length<=t+1?void 0:arguments[t+1];if(Array.isArray(a))return a;if("string"===typeof a)return[a]}return[e]}("An error occurred",e.response.data,e.response.data.errors,e.response.data.error):[e.message||"An error occurred"]}var fe=function(){var e=g(),t=e.state,a=e.dispatch,s=Object(n.useState)(!1),o=Object(l.a)(s,2),c=o[0],u=o[1],i=Object(n.useState)(!1),m=Object(l.a)(i,2),d=m[0],p=m[1],f=Object(n.useState)(""),h=Object(l.a)(f,2),v=h[0],b=h[1],E=Object(n.useState)(""),_=Object(l.a)(E,2),y=_[0],k=_[1],w=function(){return u(!1)},j=re.a.unlocked,x="lock-open",O="Set a password to keep your username",C="Claim Username";return t.auth.user&&t.auth.user.hasPassword&&(j=re.a.locked,x="lock",O="Change your password",C="Update Password"),r.a.createElement("div",{className:re.a.passwordLock},r.a.createElement(z.a,{placement:"bottom",delay:500,overlay:r.a.createElement(H.a,{id:"passwordLock"},O)},r.a.createElement(te.a,{variant:"link",className:j,style:{padding:0},onClick:function(){return u(!0)}},r.a.createElement(G.a,{icon:x}))),r.a.createElement(ae.a,{show:c,onHide:w},r.a.createElement(q.a,{noValidate:!0,validated:d,onSubmit:function(e){(e.preventDefault(),e.stopPropagation(),p(!0),e.currentTarget.checkValidity())&&me("/password","POST",{password:v,repeatPassword:y}).then((function(){a({type:"user_password",payload:!0}),u(!1),p(!1),b(""),k("")})).catch((function(e){a({type:"error",payload:e.errors.join(", ")})}))}},r.a.createElement(ae.a.Header,{closeButton:!0},r.a.createElement(ae.a.Title,null,C)),r.a.createElement(ae.a.Body,null,r.a.createElement(q.a.Group,{controlId:"pwd.new"},r.a.createElement(q.a.Control,{as:"input",type:"password",placeholder:"Password...",autoFocus:!0,required:!0,minLength:6,onChange:function(e){b(e.currentTarget.value)},value:v}),r.a.createElement(q.a.Control.Feedback,{type:"invalid"},"The password is too short. Minimum length is 6 characters.")),r.a.createElement(q.a.Group,{controlId:"pwd.new"},r.a.createElement(q.a.Control,{as:"input",type:"password",placeholder:"Repeat Password...",required:!0,minLength:6,pattern:v,onChange:function(e){k(e.currentTarget.value)},value:y}),r.a.createElement(q.a.Control.Feedback,{type:"invalid"},"The passwords don't match!"))),r.a.createElement(ae.a.Footer,null,r.a.createElement(te.a,{variant:"secondary",onClick:w},"Close"),r.a.createElement(te.a,{type:"submit",variant:"primary"},"Set password")))))},ge=function(){var e=f().state,t=r.a.createElement(P,null);return e.socket.connected&&(t=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:I.a.chat},r.a.createElement(O.a,null,r.a.createElement(C.a,null,r.a.createElement(L.a,null,r.a.createElement(fe,null)),r.a.createElement(L.a,null,r.a.createElement(ee,null)))),r.a.createElement(X,null),r.a.createElement(K,null)))),t},he=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null))},ve=function(e){var t=f().state;return t.auth.checked?t.auth.loggedIn?r.a.createElement(x.b,{path:e.path,exact:e.exact,component:e.component}):r.a.createElement(x.a,{to:"/login"}):r.a.createElement(he,null)},be=function(e){var t=f().state;return t.auth.checked?t.auth.loggedIn?r.a.createElement(x.a,{to:"/"}):r.a.createElement(x.b,{path:e.path,exact:e.exact,component:e.component}):r.a.createElement(he,null)},Ee=a(78),_e=a.n(Ee),ye=function(){var e=f().state;if(!e.offline&&!e.error)return null;var t=e.error;return Array.isArray(t)&&(t=t.join(". ")),"string"!==typeof t&&(t=String(t)),e.error?r.a.createElement("div",{className:_e.a.offline},"Error: ",t):r.a.createElement("div",{className:_e.a.offline},"You seem to be offline! Please try again later")},ke=a(117),we=a(115),je=a.n(we),xe=function(){var e=f().dispatch,t=Object(M.a)({username:"",password:"",hasPassword:!1,loading:!1}),a=Object(l.a)(t,2),s=a[0],o=a[1],c=Object(n.useRef)(null);return r.a.createElement(O.a,{className:D()(je.a.login,"mt-4")},r.a.createElement(F,null),r.a.createElement(q.a,{noValidate:!0,onSubmit:function(e){e.preventDefault(),c.current.execute()}},r.a.createElement(q.a.Group,{controlId:"loginForm.username"},r.a.createElement(q.a.Control,{as:"input",type:"text",placeholder:"What's your name?",disabled:s.loading,autoFocus:!0,minLength:1,maxLength:20,onChange:function(e){var t=e.currentTarget.value;o((function(e){e.username=t}))},value:s.username}),s.hasPassword&&r.a.createElement(q.a.Control,{as:"input",className:"mt-2",type:"password",placeholder:"Password...",disabled:s.loading,autoFocus:!0,onChange:function(e){var t=e.currentTarget.value;o((function(e){e.password=t}))},value:s.password}),r.a.createElement(ke.a,{ref:c,size:"invisible",sitekey:"6LddUucUAAAAAIk_E1AoLY5YyxoulIzlyRLjMoMi",onChange:function(t){if(t&&!s.loading){o((function(e){e.loading=!0})),c.current.reset();var a={username:s.username,password:s.password,recaptchaToken:t};me("/auth","POST",a).then((function(t){if(!t||!t.user.user_id)return console.warn("Invalid user object"),void e({type:"login",payload:t});e({type:"login",payload:t})})).catch((function(t){console.log("login fail reason",t),400!==t.status&&e({type:"error",payload:t.errors.join(", ")}),o((function(e){e.loading=!1,400===t.status&&(e.hasPassword=!0)}))}))}}}),r.a.createElement("button",{type:"submit",style:{visibility:"hidden"}},"Login"))))},Oe=function e(t){me("/auth","GET").then((function(e){if(!e||!e.user.user_id)return console.warn("Invalid user object"),void t({type:"login",payload:null});t({type:"login",payload:e})})).catch((function(a){console.log("Login check failed",a),"Network Error"===a.message?(t({type:"offline",payload:null}),setTimeout((function(){e(t)}),2e3)):(t({type:"error",payload:a.errors.join(", ")}),t({type:"login",payload:null}))}))},Ce=function(){var e=g(),t=e.state,a=e.dispatch;return Object(n.useEffect)((function(){t.auth.checked||Oe(a)}),[t.auth.checked,a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ye,null),r.a.createElement(x.d,null,r.a.createElement(be,{path:"/login",component:xe}),r.a.createElement(ve,{path:"/",component:ge})))},Le=a(116),Te=a.n(Le),Ne=function(){var e=g().state,t=Object(n.useContext)(_).socket,a=Object(n.useState)(!0),s=Object(l.a)(a,2),o=s[0],c=s[1],u=Object(n.useState)(!1),i=Object(l.a)(u,2),m=i[0],d=i[1],p=Object(n.useCallback)((function(t){var a=e.auth.user;!o&&a&&a.user_id!==t.user.user_id&&d(!0)}),[o,e.auth.user]);return Object(n.useEffect)((function(){t&&t.on("message",p)}),[t,p]),window.onfocus=function(){d(!1),c(!0)},window.onblur=function(){c(!1)},r.a.createElement(Te.a,null,r.a.createElement("title",null,m?"\u2022 dotdot":"dotdot"))};a(185);k.b.add(w.f,w.g,w.a,w.e,j.a,w.b,w.c,w.d);var Fe=r.a.createElement(c.a,{basename:"/dotdot/"},r.a.createElement(p,null,r.a.createElement(y,null,r.a.createElement(Ne,null),r.a.createElement(Ce,null))));o.a.render(Fe,document.getElementById("root"))},21:function(e,t,a){e.exports={message:"Message_message__2v30T",system:"Message_system__2g6ZE",icon:"Message_icon__ATXFm",user:"Message_user__3HofW",timestamp:"Message_timestamp__2armv",body:"Message_body__32TEj",draft:"Message_draft__1zB7h",header:"Message_header__3wUCX",private:"Message_private__ORZ48",privateDraft:"Message_privateDraft__YRrde"}},51:function(e,t,a){e.exports={logo:"Logo_logo__30xDu",svgFilter:"Logo_svgFilter__1s9i7",blob:"Logo_blob__1iSwo","blob-first":"Logo_blob-first__3YKrD","blob-second":"Logo_blob-second__2r5Nx"}},63:function(e,t,a){e.exports={textBox:"TextBox_textBox__McZeC",private:"TextBox_private__1kesE",command:"TextBox_command__1uXWO"}},64:function(e,t,a){e.exports={passwordLock:"PasswordLock_passwordLock__2FTiA",unlocked:"PasswordLock_unlocked__21MTQ",pulse:"PasswordLock_pulse__2T-_F",locked:"PasswordLock_locked__1mCl-"}},73:function(e,t,a){e.exports={messages:"Messages_messages__tCmp1",messageList:"Messages_messageList__3cw_-"}},78:function(e,t,a){e.exports={offline:"OfflineCheck_offline__2vKbm"}}},[[119,1,2]]]);
//# sourceMappingURL=main.4c81f10e.chunk.js.map