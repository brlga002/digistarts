(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{32:function(e,t,n){e.exports=n(62)},37:function(e,t,n){},56:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(26),r=n.n(o),u=(n(37),n(30)),l=n(2),s=n(13),i=n.n(s),m=n(27),b=n(9),p=n(11),E=n(29),f=n(28),d=n.n(f).a.create({baseURL:"https://digistarts.herokuapp.com"});n(56);function h(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(""),u=Object(b.a)(r,2),l=u[0],s=u[1],f=Object(a.useState)("Online"),h=Object(b.a)(f,2),v=h[0],F=h[1],O=Object(a.useState)(!1),k=Object(b.a)(O,2),j=k[0],N=k[1],g=Object(a.useState)(""),y=Object(b.a)(g,2),C=y[0],S=y[1];function x(e){return z.apply(this,arguments)}function z(){return(z=Object(m.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j||!n||!l){e.next=18;break}return e.prev=1,N(!0),F("Pesquisando..."),e.next=6,d.post(t,{fistNumber:n,secondNumber:l});case 6:a=e.sent,S(a.data),F("Respondido"),N(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),F("Ops! Ocorreu um erro: "+e.t0.response.data.message||!1),N(!1);case 16:e.next=19;break;case 18:alert("Preencha os dois campos");case 19:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}return c.a.createElement("div",{className:"home-container"},c.a.createElement("div",{className:"content"},c.a.createElement("form",{onSubmit:function(){}},c.a.createElement("section",null,c.a.createElement("h1",null,"Opera\xe7\xf5es em n\xfameros bin\xe1rios")),c.a.createElement("input",{placeholder:"Primeiro n\xfamero",value:n,onChange:function(e){return o(e.target.value)}}),c.a.createElement("input",{placeholder:"Segundo n\xfamero",value:l,onChange:function(e){return s(e.target.value)}}),c.a.createElement("input",{placeholder:"Resultado",value:C,onChange:function(){}}),!j&&c.a.createElement("div",{className:"container-button"},c.a.createElement("button",{className:"button",onClick:function(){x("soma")},type:"button"},c.a.createElement(p.c,{size:16,color:"#FFF"})),c.a.createElement("button",{className:"button",onClick:function(){x("subtracao")},type:"button"},c.a.createElement(p.a,{size:16,color:"#FFF"})),c.a.createElement("button",{className:"button",onClick:function(){x("multiplicacao")},type:"button"},c.a.createElement(p.d,{size:16,color:"#FFF"})),c.a.createElement("button",{className:"button",onClick:function(){x("divisao")},type:"button"},c.a.createElement(E.a,{size:16,color:"#FFF"})),c.a.createElement("button",{className:"button",onClick:function(){x("resto")},type:"button"},c.a.createElement(p.b,{size:16,color:"#FFF"}))),c.a.createElement("button",{className:"button",onClick:function(){return o(""),s(""),S(""),N(!1),void F("Online")},type:"button"},"Limpar"),c.a.createElement("p",null,"Status: ",v))))}function v(){return c.a.createElement(u.a,null,c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/",component:h})))}var F=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,null))};r.a.render(c.a.createElement(F,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.c33ce2a5.chunk.js.map