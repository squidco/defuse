(this.webpackJsonpdefuse=this.webpackJsonpdefuse||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(18),i=n.n(s),u=n(19),a=n(2),j=(n(24),n(25),n(3)),o=n(5);var b=function(e){var t=e.time,n=e.setGameStage,c=e.setWinner,s=e.winner,i=Object(r.useState)(),u=Object(j.a)(i,2),a=u[0],b=u[1],d=Object(r.useRef)();return Object(r.useEffect)((function(){d.current=setInterval((function(){b((function(e){return e-1}))}),1e3)}),[]),Object(r.useEffect)((function(){console.log(t),b(t)}),[t]),Object(r.useEffect)((function(){0===a&&(clearInterval(d.current),c(s),n("winnerWinner"))}),[a]),Object(o.jsx)(o.Fragment,{children:0!==a&&Object(o.jsx)("h1",{children:a})})};var d=function(e){var t=e.children;return Object(o.jsx)("div",{children:Object(o.jsxs)("p",{children:[t," win!"]})})};var l=function(e){var t=e.setGameStage,n=e.stage,c=e.setWinner,s=e.winner,i=Object(r.useState)(7),u=Object(j.a)(i,2),a=u[0],b=u[1],d=Object(r.useRef)();function l(){clearInterval(d.current),b(7)}return Object(r.useEffect)((function(){window.addEventListener("mouseup",l)}),[]),Object(r.useEffect)((function(){0===a&&(window.removeEventListener("mouseup",l),c(s),t(n))}),[a]),Object(o.jsx)("button",{onMouseDown:function(){d.current=setInterval((function(){b((function(e){return e-1})),console.log(a)}),1e3)},children:"Press and Hold"})};n(27);var f=function(){var e=Object(r.useState)(),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(),i=Object(j.a)(s,2),u=i[0],a=i[1],f=Object(r.useState)("settings"),O=Object(j.a)(f,2),m=O[0],h=O[1],x=Object(r.useState)(""),g=Object(j.a)(x,2),v=g[0],p=g[1];switch(m){case"settings":return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n&&u&&h("bombPlanted")},children:[Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("label",{htmlFor:"roundTime",children:"Round Time"}),Object(o.jsx)("input",{name:"roundTime",type:"text",onChange:function(e){return c(e.target.value)}})]}),Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("label",{htmlFor:"defuseTime",children:"Defuse Time"}),Object(o.jsx)("input",{name:"defuseTime",type:"text",onChange:function(e){return a(e.target.value)}})]}),Object(o.jsx)("button",{type:"submit",children:"Start Round"})]});case"bombPlanted":return Object(o.jsxs)("div",{className:"bomb-display edge-glow input-group",children:[Object(o.jsx)(b,{time:n,setGameStage:h,setWinner:p,winner:"Defenders"}),Object(o.jsx)(l,{setGameStage:h,stage:"defuserPlanted",setWinner:p,winner:"Attackers"})]});case"defuserPlanted":return Object(o.jsxs)("div",{className:"defuser-display edge-glow yellow",children:[Object(o.jsx)(b,{time:u,setGameStage:h,setWinner:p,winner:"Attackers"}),Object(o.jsx)(l,{setGameStage:h,stage:"winnerWinner",setWinner:p,winner:"Defenders"})]});case"winnerWinner":return Object(o.jsx)(d,{children:v});default:return Object(o.jsx)("p",{children:"You broke it. Good job."})}};var O=function(){return Object(o.jsx)("div",{className:"main",children:Object(o.jsx)(f,{})})},m=Object(u.a)([{path:"/",element:Object(o.jsx)(O,{})}],{basename:"/defuse/"});i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(a.b,{router:m})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.ce368f85.chunk.js.map