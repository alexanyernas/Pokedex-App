(this["webpackJsonppokedex-app"]=this["webpackJsonppokedex-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(4),s=n.n(c),i=n(2),r=(n(9),n(0)),l=function(e){var t=e.data,n=t.name,a=t.sprites.front_default;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"col mb-3 ml-3",children:Object(r.jsx)("div",{className:"card text-center border-light text-white bg-dark mb-3",children:Object(r.jsxs)("div",{className:"row no-gutters",children:[Object(r.jsx)("div",{className:"col-md-4",children:Object(r.jsx)("img",{src:a,alt:n,className:"card-img"})}),Object(r.jsx)("div",{className:"col-md-8",children:Object(r.jsx)("div",{className:"card-body",children:Object(r.jsx)("h5",{className:"card-title",children:n})})})]})})})})},j=(n(11),n(12),n(13),function(){return Object(r.jsx)("div",{className:"container-footer",children:Object(r.jsx)("span",{children:"Developer: Alexanyer Naranjo \ud83d\udc68\u200d\ud83d\udcbb"})})}),b=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0],c=t[1],s=function(){var e="https://pokeapi.co/api/v2/pokemon/?limit=".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:120),t=Object(a.useState)([]),n=Object(i.a)(t,2)[1],c=Object(a.useState)([]),s=Object(i.a)(c,2),r=s[0],l=s[1],j=[];return Object(a.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){return n(e.results.map((function(e){fetch(e.url).then((function(e){return e.json()})).then((function(e){return j.push(e)})),l(j)})))}))}),[]),r}();return setTimeout((function(){c(!1)}),2e3),Object(r.jsx)(r.Fragment,{children:n?Object(r.jsx)("div",{className:"container-loading",children:Object(r.jsx)("p",{className:"loading",children:"Loading..."})}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsx)("div",{className:"card-deck",children:s.map((function(e){var t=e.name,n=e.sprites;return Object(r.jsx)(l,{data:{name:t,sprites:n}},t)}))})}),Object(r.jsx)(j,{})]})})},o=(n(14),function(){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("img",{src:"".concat("","/assets/logo.png"),alt:"Pokemon",width:"200"}),Object(r.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav",children:Object(r.jsxs)("ul",{className:"navbar-nav",children:[Object(r.jsx)("li",{className:"ml-2 nav-item",children:Object(r.jsx)("a",{target:"_blank",href:"https://github.com/alexanyernas",className:"nav-link bi bi-github "})}),Object(r.jsx)("li",{className:"ml-2 nav-item",children:Object(r.jsx)("a",{target:"_blank",href:"https://instagram.com/alexanyernas",className:"nav-link bi bi-instagram"})}),Object(r.jsx)("li",{className:"ml-2 nav-item",children:Object(r.jsx)("a",{target:"_blank",href:"https://twitter.com/alexanyernas",className:"nav-link bi bi-twitter"})}),Object(r.jsx)("li",{className:"ml-2 nav-item",children:Object(r.jsx)("a",{target:"_blank",href:"https://linkedin.com/in/alexanyernas",className:"nav-link bi bi-linkedin"})})]})})]})})}),d=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o,{}),Object(r.jsx)(b,{})]})},m=(n(15),document.querySelector("#root"));s.a.render(Object(r.jsx)(d,{}),m)}],[[16,1,2]]]);
//# sourceMappingURL=main.6eb3a3fc.chunk.js.map