(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{125:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(0),s=a.n(c),r=a(10),o=a.n(r),i=(a(97),a(28)),l=a(11),j=(a(98),a(39)),u=a.n(j),b=a(49),d=a(25),m=a(44),h=a.n(m),p=a.p+"static/media/no-messages.ca44d631.png",x=a.p+"static/media/cherry-online-service.07215af7.png",O=a(79),g=a.n(O),f=a(153),v=a(171),k=a(155),y=a(157),N=a(158),S=a(159),w=a(160),C=a(161),L=Object(f.a)((function(e){return{root:{width:"100%",maxWidth:360},customLink:{color:e.palette.text.main,textDecoration:"none"},media:{marginTop:e.spacing(1),width:"150px",height:"180px"},mediaStart:{width:"270px",height:"210px"}}})),D=function(e){var t=e.repos,a=e.user,c=e.message,s=L(),r=[];return r="Not found"==c?Object(n.jsxs)(v.a,{display:"flex",flexDirection:"column",alignItems:"center",children:[Object(n.jsx)("span",{children:"No such user"}),Object(n.jsx)("div",{className:s.media,children:Object(n.jsx)(k.a,{className:s.media,image:p})})]}):0!==t.length?t.map((function(e){return Object(n.jsx)(i.b,{className:s.customLink,to:{pathname:"/repo/".concat(e.full_name)},children:Object(n.jsx)("div",{className:s.root,children:Object(n.jsx)(y.a,{component:"nav","aria-label":"list of repos",children:Object(n.jsxs)(N.a,{button:!0,children:[Object(n.jsx)(S.a,{className:s.customLink,children:Object(n.jsx)(g.a,{})}),Object(n.jsx)(w.a,{primary:e.name})]})})})},e.id)})):a?Object(n.jsxs)(v.a,{display:"flex",flexDirection:"column",alignItems:"center",children:[Object(n.jsx)("span",{children:"No repos"}),Object(n.jsx)("div",{className:s.media,children:Object(n.jsx)(k.a,{className:s.media,image:p})})]}):Object(n.jsx)("div",{className:s.mediaStart,children:Object(n.jsx)(k.a,{className:s.mediaStart,image:x})}),Object(n.jsx)(C.a,{container:!0,direction:"column",alignItems:"center",justify:"center",children:Object(n.jsxs)("h2",{children:[" ",r," "]})})},I=a(80),T=a.n(I),W=a(162),B=a(163),F=a(170),P=a(164),q=a(165),E=Object(f.a)((function(e){return{heroButtons:{marginTop:e.spacing(4)},clear:{"&:hover":{backgroundColor:e.palette.buttons.action.hover,boxShadow:"none"}},blue:{backgroundColor:e.palette.buttons.action.selected,borderColor:e.palette.buttons.action.selected,"&:hover":{backgroundColor:"#5095b5",borderColor:"#5095b5",boxShadow:"none"}},customLink:{textDecoration:"none"},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{marginTop:e.spacing(3),width:"100%"},submit:{margin:e.spacing(3,0,2)},root:{width:"300px",backgroundColor:"#424242",color:e.palette.buttons.action.selected}}}));var J=function(){var e=Object(l.g)(),t=Object(l.f)(),a=Object(c.useState)(""),s=Object(d.a)(a,2),r=s[0],o=s[1],j=Object(c.useState)([]),m=Object(d.a)(j,2),p=m[0],x=m[1],O=Object(c.useState)(null),g=Object(d.a)(O,2),f=g[0],v=g[1],k=Object(c.useState)(!1),y=Object(d.a)(k,2),N=(y[0],y[1]),S=Object(c.useState)(""),w=Object(d.a)(S,2),L=w[0],I=w[1],J=E();Object(c.useEffect)((function(){var t=new URLSearchParams(e.search).get("query");t&&(o(t),M(t))}),[]);var M=function(){var e=Object(b.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N(!1),e.next=4,h()("https://api.github.com/users/".concat(a,"/repos"));case 4:n=e.sent,x(n.data),v(a),t.push({search:"?query=".concat(a)}),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message),N(!0),(e.t0.message="Not found")?I("Not found"):I("Something went wrong");case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),U=function(e){I(" "),e.preventDefault(),M(r)};return Object(n.jsxs)(W.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(B.a,{}),Object(n.jsx)("div",{className:J.paper,children:Object(n.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:U,children:[Object(n.jsx)(C.a,{container:!0,spacing:2,children:Object(n.jsx)(C.a,{item:!0,xs:12,children:Object(n.jsx)(F.a,{className:J.root,id:"outlined-basic",label:"GitHub user name",variant:"outlined",fullWidth:!0,type:"text",value:r,onChange:function(e){o(e.target.value)},InputProps:{endAdornment:Object(n.jsx)(P.a,{position:"end",children:Object(n.jsx)(T.a,{})})}})})}),Object(n.jsx)("div",{className:J.heroButtons,children:Object(n.jsxs)(C.a,{container:!0,spacing:2,justify:"center",children:[Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(q.a,{variant:"contained",onClick:U,type:"submit",className:J.blue,children:"Search"})}),Object(n.jsx)(C.a,{item:!0,children:Object(n.jsx)(i.b,{to:{pathname:"/"},className:J.customLink,children:Object(n.jsx)(q.a,{variant:"contained",onClick:function(){o(""),x([]),v(null),I(" ")},className:J.clear,children:"Clear"})})})]})})]})}),Object(n.jsx)(D,{repos:p,user:f,message:L})]})},M=function(){return Object(n.jsx)(C.a,{container:!0,direction:"column",alignItems:"center",justify:"center",children:Object(n.jsx)(J,{})})},U=a(166),$=a(167),_=a(168),z=a(173),A=a(27),G=Object(f.a)((function(e){return{root:{marginTop:e.spacing(8),display:"flex",margin:"auto",transition:"0.3s",boxShadow:"0 8px 40px -12px rgba(0,0,0,0.3)",background:"rgba(255, 255, 255, 0.7)"},content:{flex:"1 0 auto",flexDirection:"column"},media:{width:170},avatar:{width:e.spacing(6),height:e.spacing(6)},button:{marginTop:e.spacing(6),"&:hover":{backgroundColor:e.palette.buttons.action.hover,boxShadow:"none"}},center:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},customLink:{fontSize:"1.5rem",color:e.palette.background.default},noLink:{textDecoration:"none"}}})),H=function(){var e=Object(l.h)(),t=e.author,a=e.name,s=Object(c.useState)([]),r=Object(d.a)(s,2),o=r[0],i=r[1],j=Object(c.useState)([]),m=Object(d.a)(j,2),p=m[0],x=m[1],O=Object(c.useState)([]),g=Object(d.a)(O,2),f=g[0],y=g[1],N=G(),S=Object(l.f)(),w=Object(c.useCallback)((function(){return S.push("/?query=".concat(t))}),[S]);return Object(c.useEffect)(Object(b.a)(u.a.mark((function e(){var n,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h()("https://api.github.com/repos/".concat(t,"/").concat(a,"/languages"));case 3:return n=e.sent,0!==(c=Object.keys(n.data)).length?i(c):i(["No used languages"]),e.next=8,h()("https://api.github.com/users/".concat(t));case 8:s=e.sent,x(s.data.avatar_url),y("https://github.com/".concat(t,"/").concat(a)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),[]),Object(n.jsxs)(W.a,{className:N.center,component:"main",maxWidth:"md",children:[Object(n.jsx)(B.a,{}),Object(n.jsxs)(U.a,{className:N.root,children:[Object(n.jsxs)($.a,{className:N.content,children:[Object(n.jsx)(_.a,{avatar:Object(n.jsx)(z.a,{"aria-label":"first letter",className:N.avatar,children:t[0]}),title:Object(n.jsx)("a",{target:"blank",href:f,className:N.customLink,children:a})}),Object(n.jsxs)(A.a,{variant:"body1",color:"textSecondary",component:"p",children:["The",Object(n.jsx)(v.a,{fontWeight:"fontWeightBold",m:1,display:"inline",children:"author"}),"is ",t," ",Object(n.jsx)("br",{}),"Used",Object(n.jsx)(v.a,{fontWeight:"fontWeightBold",m:1,display:"inline",children:"languages"}),"are: ",o.join(", ")]})]}),Object(n.jsx)(k.a,{className:N.media,image:p,title:"avatar"})]}),Object(n.jsx)("div",{children:Object(n.jsx)(q.a,{variant:"contained",className:N.button,onClick:w,children:"Back"})})]})},R="/",V="/repo/:author/:name",K=a(169),Q=a(81),X=Object(Q.a)({overrides:{MuiInputLabel:{root:{color:"rgba(255, 255, 255, 0.7)","&$shrink":{"&$focused":{color:"#59aad1"}}}}},palette:{type:"dark",primary:{main:"#59aad1"},buttons:{action:{selected:"#59aad1",hover:"rgba(255, 255, 255, 0.5)"}},text:{secondary:"#424242",main:"rgba(255, 255, 255, 0.7)"}}});var Y=function(){return Object(n.jsx)(K.a,{theme:X,children:Object(n.jsx)(i.a,{basename:window.location.pathname||"",children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:R,component:M}),Object(n.jsx)(l.a,{path:V,component:H})]})})})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,174)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};a(124);o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(K.a,{theme:X,children:Object(n.jsx)(B.a,{children:Object(n.jsx)(Y,{})})})}),document.getElementById("root")),Z()},97:function(e,t,a){},98:function(e,t,a){}},[[125,1,2]]]);
//# sourceMappingURL=main.c23846f9.chunk.js.map