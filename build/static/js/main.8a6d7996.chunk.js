(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{36:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(30),r=a.n(c),i=(a(36),a(3)),l=a.n(i),o=a(5),d=a(2),b=a(8),u=a(4),j=a.n(u);var m=function(e){var t=Object(s.useState)(!1),a=Object(d.a)(t,2),n=a[0],c=a[1],r=Object(s.useState)(!1),i=Object(d.a)(r,2),b=i[0],u=i[1],m=Object(s.useState)([]),p=Object(d.a)(m,2),h=p[0],x=p[1];return Object(s.useEffect)((function(){e&&function(){var t=Object(o.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("http://localhost:5000/user/information",{headers:{Authorization:e}});case 3:1===(a=t.sent).data.role?u(!0):u(!1),x(a.data),c(!0),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),alert(t.t0.response.data.msg);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}()()}),[e]),{isLogged:[n,c],isAdmin:[b,u],user:[h,x]}},p=a(0),h=Object(s.createContext)(),x=function(e){var t=e.children,a=Object(s.useState)(!1),n=Object(d.a)(a,2),c=n[0],r=n[1];Object(s.useEffect)((function(){var e=localStorage.getItem("firstLogin"),t=localStorage.getItem("refreshtoken");if(e)try{var a=function(){var e=Object(o.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("http://localhost:5000/user/refresh_token",{refreshtoken:t});case 2:s=e.sent,r(s.data.accesstoken),setTimeout((function(){a()}),6e5);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a()}catch(s){console.log(s)}}),[]);var i={token:[c,r],UserApi:m(c)};return Object(p.jsx)(h.Provider,{value:i,children:t})};var O=function(){var e=Object(s.useContext)(h),t=Object(d.a)(e.UserApi.isLogged,1)[0],a=Object(s.useState)([]),n=Object(d.a)(a,2),c=n[0],r=n[1],i=function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=11;break}return e.prev=1,e.next=4,j.a.post("http://localhost:5000/r/search",{query:t.value});case 4:a=e.sent,r(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{children:Object(p.jsx)("nav",{className:"navbar sticky-top navbar-expand-lg navbar-light bg-darkdarkdark",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsxs)(b.b,{className:"navbar-brand text-white",to:"/",children:[Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",className:"mx-4 reddit_logo",children:Object(p.jsxs)("g",{children:[Object(p.jsx)("circle",{fill:"#FF4500",cx:"10",cy:"10",r:"10"}),Object(p.jsx)("path",{fill:"#FFF",d:"M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"})]})}),"Reddit"]}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsxs)("div",{className:"collapse navbar-collapse justify-content-between",id:"navbarSupportedContent",children:[Object(p.jsxs)("ul",{className:"navbar-nav",children:[Object(p.jsx)("li",{className:"ms-4 nav-item d-flex align-items-center",children:Object(p.jsx)(b.b,{className:"nav-link p-0 text-white",to:"/subreddits",children:"Subreddits"})}),t?Object(p.jsx)("li",{className:"nav-item ms-4",children:Object(p.jsx)(b.b,{className:"nav-link text-white",to:"/account",children:"Account"})}):Object(p.jsxs)("li",{className:"nav-item d-flex ms-4",children:[Object(p.jsx)(b.b,{className:"nav-link text-white",to:"/login",children:"Login"}),Object(p.jsx)(b.b,{className:"nav-link text-white btn btn-primary text-white ms-4 px-3",to:"/sign-up",children:"Register"})]})]}),Object(p.jsx)("form",{className:"d-flex justify-content-end",children:Object(p.jsx)("input",{className:"form-control me-2 bg-darkdarkdark border-0 input-text-white",onBlur:function(){return setTimeout((function(){r([])}),900)},type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){var t=e.target;return i(t)}})}),c.length>0?Object(p.jsx)("ul",{className:"list-group list-group-flush search-content",children:c.map((function(e){return Object(p.jsx)("li",{className:"list-group-item",children:Object(p.jsx)("a",{className:"link",href:"r"!==window.location.pathname.split("/")[1]?"r/"+e.title:e.title,children:e.title})},e._id)}))}):""]})]})})})},f=a(15),g=a(20);var v=function(){var e=Object(s.useState)({email:"",password:""}),t=Object(d.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(!1),r=Object(d.a)(c,2),i=r[0],u=r[1],m=Object(s.useState)({is:!1,msg:""}),h=Object(d.a)(m,2),x=h[0],O=h[1],v=function(e){var t=e.target,s=t.name,c=t.value;n(Object(g.a)(Object(g.a)({},a),{},Object(f.a)({},s,c)))},w=function(){var e=Object(o.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.prev=1,t.preventDefault(),e.next=5,j.a.post("http://www.localhost:5000/user/login",{email:a.email,password:a.password});case 5:s=e.sent,n({email:"",password:""}),localStorage.setItem("firstLogin",!0),localStorage.setItem("refreshtoken",s.data.refreshtoken),window.location.href=document.referrer,e.next=17;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0),e.t0.response?O({is:!0,msg:e.t0.response.data.msg}):O({is:!0,msg:"Something went wrong when logging in. Please try again."}),setTimeout((function(){O({})}),3e3);case 17:u(!1);case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("form",{onSubmit:w,children:[x.is?Object(p.jsx)("div",{className:"alert alert-danger",role:"alert",children:x.msg}):"",Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(p.jsx)("input",{required:!0,value:a.email,name:"email",onChange:function(e){return v(e)},type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(p.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(p.jsx)("input",{required:!0,value:a.password,name:"password",onChange:function(e){return v(e)},type:"password",className:"form-control",id:"exampleInputPassword1"}),Object(p.jsx)("div",{id:"passwordHelpBlock",className:"form-text",children:"Your password must be 6 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."})]}),Object(p.jsx)("button",{type:"submit",className:i?"btn btn-primary disabled":"btn btn-primary",disabled:i,children:i?"Logging in":"Log In"})]}),Object(p.jsxs)("p",{children:["Don't have an account? ",Object(p.jsx)(b.b,{to:"/sign-up",children:"Sign-up"})]})]})};var w=function(){var e=Object(s.useState)({is:!1,msg:""}),t=Object(d.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(""),r=Object(d.a)(c,2),i=r[0],u=r[1],m=Object(s.useState)(""),h=Object(d.a)(m,2),x=h[0],O=h[1],f=Object(s.useState)(""),g=Object(d.a)(f,2),v=g[0],w=g[1],N=Object(s.useState)(""),y=Object(d.a)(N,2),k=y[0],S=y[1],C=function(){var e=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,j.a.post("http://www.localhost:5000/user/sign-up",{email:i,password:x,username:k,password2:v});case 4:a=e.sent,localStorage.setItem("firstLogin",!0),localStorage.setItem("refreshtoken",a.data.refreshtoken),window.location.href="/",e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),e.t0.response?n({is:!0,msg:e.t0.response.data.msg}):n({is:!0,msg:"Something went wrong when logging in. Please try again."}),setTimeout((function(){n({})}),3e3);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[a.is?Object(p.jsx)("div",{className:"alert alert-danger",role:"alert",children:a.msg}):"",Object(p.jsxs)("form",{onSubmit:C,children:[Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(p.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",onChange:function(e){var t=e.target;return u(t.value)}}),Object(p.jsx)("div",{id:"emailHelp",className:"form-text",children:"We'll never share your email with anyone else."})]}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Display Name"}),Object(p.jsx)("input",{type:"username",className:"form-control",id:"InputUsername","aria-describedby":"nameHelp",onChange:function(e){var t=e.target;return S(t.value)}}),Object(p.jsx)("div",{id:"nameHelp",className:"form-text",children:"We'll use this name to reference you on our site"})]}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(p.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",onChange:function(e){var t=e.target;return O(t.value)}}),Object(p.jsx)("div",{id:"passwordHelpBlock",className:"form-text",children:"Your password must be 6 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."})]}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"InputPassword2",className:"form-label",children:"Validate Password"}),Object(p.jsx)("input",{type:"password",className:"form-control",id:"InputPassword2",onChange:function(e){var t=e.target;return w(t.value)}}),Object(p.jsx)("div",{id:"nameHelp",className:"form-text",children:"Type your password again"})]}),Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]}),Object(p.jsxs)("p",{className:"mt-3",children:["Already have an account? ",Object(p.jsx)(b.b,{to:"/login",children:"Login"})]})]})};var N=function(){var e=Object(s.useState)({}),t=Object(d.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(""),r=Object(d.a)(c,2),i=r[0],u=r[1],m=Object(s.useState)(""),x=Object(d.a)(m,2),O=x[0],f=x[1],g=Object(s.useState)({is:!1,msg:""}),v=Object(d.a)(g,2),w=v[0],N=v[1],y=Object(s.useContext)(h),k=Object(d.a)(y.UserApi.isLogged,1)[0],S=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.post("http://www.localhost:5000/r/search",{query:"",limit:200});case 3:t=e.sent,n(t.data),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response?N({is:!0,msg:e.t0.response.data.msg}):N({is:!0,msg:"Something went wrong while fetching the data. Please try again."}),setTimeout((function(){N({})}),3e3);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){S()}),[]);var C=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.post("http://www.localhost:5000/r/create",{title:i,description:O},{headers:{Authorization:y.state.token[0]}});case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),e.t0.response?N({is:!0,msg:e.t0.response.data.msg}):N({is:!0,msg:"Something went wrong when creating a new sub. Please try again."}),setTimeout((function(){N({})}),3e3);case 9:S();case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[w.is?Object(p.jsx)("div",{className:"alert alert-danger",role:"alert",children:w.msg}):"",Object(p.jsx)("button",{type:"button",className:"btn btn-primary px-5 mb-3","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"Create Sub"}),Object(p.jsx)("div",{className:"card bg-light-card p-2 ps-4",children:"All Comunities"}),0!==Object.keys(a).length?Object(p.jsx)("div",{className:"d-flex flex-column list-group list-group-flush",children:a.map((function(e){return Object(p.jsxs)(b.b,{className:"list-group-item bg-dark-post text-white border-bottom-link fs-4",id:e.id,to:k?"/r/"+e.title:"/login",children:["r/",e.title]},e._id)}))}):Object(p.jsx)("div",{children:"No subs yet. Create one!"}),Object(p.jsx)("div",{className:"modal modal-fullscreen fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(p.jsx)("div",{className:"modal-dialog",children:Object(p.jsxs)("div",{className:"modal-content",children:[Object(p.jsxs)("div",{className:"modal-header",children:[Object(p.jsx)("h5",{className:"modal-title text-black",id:"exampleModalLabel",children:"Create Subreddit"}),Object(p.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(p.jsx)("div",{className:"modal-body",children:Object(p.jsxs)("form",{children:[Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label text-black",children:"Subreddit Name"}),Object(p.jsx)("input",{value:i,onChange:function(e){u(e.target.value)},type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(p.jsx)("div",{id:"emailHelp",className:"form-text",children:"This is the name your subreddit wil get and will get found by."})]}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label text-black",children:"description"}),Object(p.jsx)("textarea",{value:O,onChange:function(e){f(e.target.value)},type:"text",className:"form-control",id:"exampleInputPassword1"}),Object(p.jsx)("div",{id:"emailHelp",className:"form-text",children:"Max 400 characters."})]})]})}),Object(p.jsxs)("div",{className:"modal-footer",children:[Object(p.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(p.jsx)("button",{onClick:function(){C()},type:"button",className:"btn btn-primary","data-bs-dismiss":"modal",children:"Save changes"})]})]})})})]})};var y=function(){return Object(p.jsx)("div",{children:"Welcom to my reddit clone"})};var k=function(e){var t=e.post,a=(e.id,Object(s.useContext)(h)),n=Object(s.useState)(!1),c=Object(d.a)(n,2),r=c[0],i=c[1],u=Object(s.useState)(!1),m=Object(d.a)(u,2),x=m[0],O=m[1],f=Object(s.useState)(0),g=Object(d.a)(f,2),v=g[0],w=g[1],N=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x&&(O(!1),w(0)),r?(i(!1),w(0)):(i(!0),w(1)),e.prev=2,e.next=5,j.a.post("http://localhost:5000/post/vote",{way:"up",id:t._id},{headers:{Authorization:a.token[0]}});case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r&&(i(!1),w(0)),x?(O(!1),w(0)):(O(!x),w(-1)),e.prev=2,e.next=5,j.a.post("http://localhost:5000/post/vote",{way:"down",id:t._id},{headers:{Authorization:a.token[0]}});case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"card mt-4 bg-dark-post width-69",children:Object(p.jsxs)("div",{className:"card-body d-flex p-0",children:[Object(p.jsx)("div",{className:"p-3 bg-dark-post-vote text-center d-flex flex-column justify-content-center",children:Object(p.jsxs)("div",{children:[r?Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"green",className:"bi bi-hand-thumbs-up-fill pointer",viewBox:"0 0 16 16",onClick:N,children:Object(p.jsx)("path",{d:"M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"})}):Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"green",className:"bi bi-hand-thumbs-up text-success pointer",viewBox:"0 0 16 16",onClick:N,children:Object(p.jsx)("path",{d:"M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"})}),Object(p.jsx)("h4",{className:"mt-2",children:t.upvotes+v}),x?Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"red",className:"bi bi-hand-thumbs-down-fill pointer",viewBox:"0 0 16 16",onClick:y,children:Object(p.jsx)("path",{d:"M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z"})}):Object(p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"red",className:"bi bi-hand-thumbs-down text-danger pointer",viewBox:"0 0 16 16",onClick:y,children:Object(p.jsx)("path",{d:"M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z"})})]})}),Object(p.jsx)(b.b,{to:"/post/"+t._id,className:"text-white text-decoration-none py-3 mx-4 w-100",children:Object(p.jsxs)("div",{className:"pointer",children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsxs)("p",{className:"card-text",children:["r/",window.location.href.split("/")[window.location.href.split("/").length-1],"\xa0\xa0\xa0\u2022\xa0\xa0\xa0Posted by: u/",t.creator," "]}),Object(p.jsx)("p",{className:"fw-lighter",children:new Date(t.createdAt).toString().substring(0,31)})]}),Object(p.jsx)("h2",{className:"card-title",children:t.title}),Object(p.jsxs)("p",{className:"card-text",children:[t.text.substring(0,399),t.text.length>399?"...":""]}),Object(p.jsxs)("p",{className:"link-primary",children:[t.comments.length," Comments"]})]})})]})},t._id)};var S=function(){var e=Object(s.useContext)(h),t=Object(s.useState)(""),a=Object(d.a)(t,2),n=a[0],c=a[1],r=Object(s.useState)([]),i=Object(d.a)(r,2),b=i[0],u=i[1],m=Object(s.useState)([]),x=Object(d.a)(m,2),O=x[0],f=x[1],g=Object(s.useState)(""),v=Object(d.a)(g,2),w=v[0],N=v[1],y=Object(s.useState)({is:!1,msg:""}),S=Object(d.a)(y,2),C=S[0],A=S[1],I=function(){var t=Object(o.a)(l.a.mark((function t(){var a,s,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.post("http://www.localhost:5000/r/search",{query:window.location.href.split("/")[window.location.href.split("/").length-1],limit:1},{headers:{Authorization:e.token[0]}});case 3:if(a=t.sent,u(a.data[0]),!(a.data.length>0)){t.next=13;break}return s=a.data[0].posts,t.next=9,j.a.post("http://www.localhost:5000/post/getbyid",{ids:s},{headers:{Authorization:e.token[0]}});case 9:n=t.sent,f(n.data),t.next=14;break;case 13:f([]);case 14:t.next=21;break;case 16:t.prev=16,t.t0=t.catch(0),console.log(t.t0),t.t0.response?A({is:!0,msg:t.t0.response.data.msg}):A({is:!0,msg:"Something went wrong while fetching the data. Please try again."}),setTimeout((function(){A({})}),3e3);case 21:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(){return t.apply(this,arguments)}}();Object(s.useEffect)((function(){I()}),[]);var P=function(){var t=Object(o.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.post("http://localhost:5000/post/create",{title:n,text:w,creator:e.UserApi.user[0].username,sub:window.location.href.split("/")[window.location.href.split("/").length-1]},{headers:{Authorization:e.token[0]}});case 3:I(),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),t.t0?(console.log(t.t0),A({is:!0,msg:t.t0.response.data.msg})):A({is:!0,msg:"Something went wrong while fetching the data. Please try again."}),setTimeout((function(){A({})}),3e3);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[C.is?Object(p.jsx)("div",{className:"alert alert-danger",role:"alert",children:C.msg}):"",Object(p.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[Object(p.jsx)("div",{children:O.length>0?O.map((function(e){return Object(p.jsx)(k,{post:e},e._id)})):Object(p.jsx)("div",{className:"mt-3",children:"No posts found"},"123")}),b?Object(p.jsxs)("div",{className:"card4 card mt-4 bg-dark-post",children:[Object(p.jsx)("div",{className:"card-body",children:Object(p.jsxs)("div",{className:"w-100",children:[Object(p.jsx)("p",{children:"About Community:"}),Object(p.jsxs)("h1",{className:"card-title pb-3",children:["r/",b.title]}),Object(p.jsx)("p",{className:"card-text pt-6",children:b.description}),Object(p.jsxs)("div",{className:"card bg-light-card text-white px-4 pt-3 pb-2",children:[Object(p.jsx)("p",{className:"card-text fs-5",children:b.members}),Object(p.jsx)("p",{children:"Members"}),Object(p.jsx)("p",{className:"card-text fs-5",children:(b.members/4).toFixed(0)}),Object(p.jsx)("p",{children:"Online"})]})]})}),Object(p.jsx)("button",{className:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"Create Post"})]}):"No description found",Object(p.jsx)("div",{className:"modal modal-fullscreen fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(p.jsx)("div",{className:"modal-dialog",children:Object(p.jsxs)("div",{className:"modal-content bg-dark",children:[Object(p.jsxs)("div",{className:"modal-header",children:[Object(p.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Create Post"}),Object(p.jsx)("button",{type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(p.jsx)("div",{className:"modal-body",children:Object(p.jsxs)("form",{children:[Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Post Title"}),Object(p.jsx)("input",{value:n,onChange:function(e){c(e.target.value)},type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(p.jsx)("div",{id:"emailHelp",className:"form-text",children:"This is the name your Post wil get and will get found by."})]}),Object(p.jsxs)("div",{className:"mb-3",children:[Object(p.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"description"}),Object(p.jsx)("textarea",{value:w,onChange:function(e){N(e.target.value)},type:"text",className:"form-control",id:"exampleInputPassword1"})]})]})}),Object(p.jsxs)("div",{className:"modal-footer",children:[Object(p.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(p.jsx)("button",{onClick:function(){P()},type:"button",className:"btn btn-primary","data-bs-dismiss":"modal",children:"Save changes"})]})]})})})]})]})};var C=function(){var e=Object(s.useContext)(h).UserApi.user[0];return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsxs)("h1",{children:["Hello ",e.username]}),Object(p.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){localStorage.clear(),window.location.href="/"},children:"Logout"})]}),Object(p.jsxs)("ul",{className:"list-group list-group-flush my-4",children:[Object(p.jsxs)("li",{className:"bg-dark-post text-white border-bottom-link fs-5 list-group-item text-uppercase",children:["Account created:","  ",Object(p.jsx)("span",{className:"fs-6 text-lowercase",children:new Date(e.createdAt).toString().substring(0,31)})]}),Object(p.jsxs)("li",{className:"bg-dark-post text-white border-bottom-link fs-5 list-group-item text-uppercase",children:["Email:","  ",Object(p.jsx)("span",{className:"fs-6 text-lowercase",children:e.email})]}),Object(p.jsxs)("li",{className:"bg-dark-post text-white border-bottom-link fs-5 list-group-item text-uppercase",children:["Admin:","  ",Object(p.jsx)("span",{className:"fs-6 text-lowercase",children:e.role?"Yes":"No"})]}),Object(p.jsxs)("li",{className:"bg-dark-post text-white border-bottom-link fs-5 list-group-item text-uppercase",children:["ID:","  ",Object(p.jsx)("span",{className:"fs-6 text-lowercase",children:e._id})]})]})]})},A=a(6);var I=function(e){var t=e.setonPost,a=Object(A.f)(),n=function(){a.goBack()},c=Object(s.useContext)(h),r=Object(s.useState)({}),i=Object(d.a)(r,2),b=i[0],u=i[1],m=Object(s.useState)(""),x=Object(d.a)(m,2),O=x[0],f=x[1],g=window.location.href.split("/")[window.location.href.split("/").length-1];function v(){return(v=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("http://www.localhost:5000/post/comment",{id:g,text:O,creator:c.UserApi.user[0].username,createdAt:new Date},{headers:{Authorization:c.token[0]}});case 2:t=e.sent,console.log(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.post("http://www.localhost:5000/post/getbyid",{ids:[g]},{headers:{Authorization:c.token[0]}});case 3:t=e.sent,u(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(s.useEffect)((function(){return t(!0),function(){w.apply(this,arguments)}(),document.getElementById("focus").focus(),t(!1)}),[]),Object(s.useLayoutEffect)((function(){return function(){t(!1)}}),[]),Object(p.jsx)("div",{onKeyDown:function(e){"Escape"===e.key&&n()},tabIndex:"0",id:"focus",children:Object.keys(b).length>0?Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"pointer link-bg col-sm",onClick:n}),Object(p.jsxs)("div",{className:"py-3 w-75 card text-white bg-dark-post",children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsx)("p",{children:b.creator}),Object(p.jsx)("p",{children:new Date(b.createdAt).toString().substring(0,31)})]}),Object(p.jsx)("h1",{className:"py-3 border-top border-white",children:b.title}),Object(p.jsx)("p",{className:"fs-6",children:b.text}),Object(p.jsxs)("div",{class:"input-group mb-3 border-top border-white pt-3",children:[Object(p.jsx)("input",{type:"text",class:"form-control","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",placeholder:"What are your thoughts?",onChange:function(e){var t=e.target;return f(t.value)}}),Object(p.jsx)("div",{class:"input-group-prepend",children:Object(p.jsxs)("button",{class:"input-group-text",id:"inputGroup-sizing-default",type:"button",onClick:function(){return function(){return v.apply(this,arguments)}()},children:["Comment as ",b.creator]})})]}),b.comments.length>0?b.comments.map((function(e){return Object(p.jsxs)("div",{className:"my-1 border border-white p-3",children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsx)("p",{children:new Date(e.createdAt).toString().substring(0,31)}),Object(p.jsxs)("p",{children:["u/",e.creator]})]}),Object(p.jsx)("p",{children:e.text})]},e.createdAt)})):Object(p.jsx)("div",{children:'"No comments yet!"'})]}),Object(p.jsx)("div",{className:"pointer link-bg col-sm",onClick:n})]}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("p",{children:"...loading"})})})};var P=function(){return Object(p.jsx)("div",{children:"404 Not Found"})};var F=function(){var e=Object(s.useContext)(h),t=Object(d.a)(e.UserApi.isLogged,1)[0],a=Object(s.useState)(!1),n=Object(d.a)(a,2),c=n[0],r=n[1];return Object(p.jsx)("div",{className:"bg-darkdark min-height-100",children:Object(p.jsx)("div",{className:c?"pt-4":"container pt-4",children:Object(p.jsxs)(A.c,{children:[Object(p.jsx)(A.a,{exact:!0,path:"/",component:y}),Object(p.jsx)(A.a,{path:"/login",component:v}),Object(p.jsx)(A.a,{path:"/sign-up",component:w}),Object(p.jsx)(A.a,{path:"/subreddits",component:N}),Object(p.jsx)(A.a,{path:"/r/:sub",component:t?S:P}),Object(p.jsx)(A.a,{path:"/account",component:t?C:P}),Object(p.jsx)(A.a,{path:"/post/:id",component:t?function(){return Object(p.jsx)(I,{setonPost:r})}:P}),Object(p.jsx)(A.a,{path:"/",component:P})]})})})};var L=function(){return Object(p.jsx)(x,{children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(O,{}),Object(p.jsx)(F,{})]})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root")),E()}},[[62,1,2]]]);
//# sourceMappingURL=main.8a6d7996.chunk.js.map