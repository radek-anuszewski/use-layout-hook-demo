(this["webpackJsonpuse-layout-hook-demo"]=this["webpackJsonpuse-layout-hook-demo"]||[]).push([[0],{10:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),o=c(4),u=c.n(o),i=c(3),j=c(0),r=function(e){var t=e.step,c=e.onClick;return Object(j.jsxs)("div",{children:["You are on step ",t,". ",Object(j.jsx)("button",{onClick:c,children:"Next"})]})},b=function(e){var t=e.step,c=e.onClick;return Object(n.useEffect)((function(){3===t&&c()}),[t,c]),Object(j.jsx)(r,{onClick:c,step:t})},a=function(e){var t=e.step,c=e.onClick;return Object(n.useLayoutEffect)((function(){3===t&&c()}),[t,c]),Object(j.jsx)(r,{onClick:c,step:t})};var l=function(){var e=Object(n.useState)(1),t=Object(i.a)(e,2),c=t[0],s=t[1],o=Object(n.useState)(1),u=Object(i.a)(o,2),r=u[0],l=u[1],O=Object(n.useCallback)((function(){s((function(e){return e+1}))}),[s]),f=Object(n.useCallback)((function(){l((function(e){return e+1}))}),[l]),d=Object(n.useCallback)((function(){s(1),l(1)}),[s,l]);return Object(j.jsxs)("div",{style:{paddingLeft:20,paddingTop:20},children:[Object(j.jsx)("button",{onClick:d,children:"Reset counters"}),Object(j.jsx)("h2",{children:"useLayoutEffect"}),Object(j.jsx)(a,{step:r,onClick:f}),Object(j.jsx)("br",{}),Object(j.jsx)("h2",{children:"useEffect"}),Object(j.jsx)(b,{step:c,onClick:O})]})};u.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.d6e4832e.chunk.js.map