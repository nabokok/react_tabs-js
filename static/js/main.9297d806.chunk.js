(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var a=c(3),n=c.n(a),s=c(5),i=c(1),b=(c(10),c(11),c(12),c(4)),o=c(0),d=function(t){var e=t.tabs,c=t.selectedTab,a=t.onTabSelected,n=c.content;return Object(o.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.title;return Object(o.jsx)("li",{className:Object(b.a)(t===c&&"is-active"),"data-cy":"Tab",children:Object(o.jsx)("a",{href:"#".concat(e),"data-cy":"TabLink",onClick:function(){return function(t){t!==c&&a(t)}(t)},children:n})},e)}))})}),Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:n})]})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],r=function(){var t=Object(i.useState)(l[0]),e=Object(s.a)(t,2),c=e[0],a=e[1];return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{className:"title",children:"Selected tab is ".concat(c.title)}),Object(o.jsx)(d,{tabs:l,selectedTab:c,onTabSelected:a})]})};n.a.render(Object(o.jsx)(r,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9297d806.chunk.js.map