(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),r=n(4),o=n.n(r),a=(n(10),n(2)),s=n(5),u=n(1);var d=function(){var t=Object(c.useContext)(j),e=t.board,n=t.setBoard,i=Object(c.useState)(0),r=Object(a.a)(i,2),o=r[0],d=r[1];return Object(u.jsx)("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row"},children:e.map((function(t,c){return Object(u.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:t.map((function(t,i){return Object(u.jsx)("button",{style:{height:"100px",width:"100px"},onClick:function(){var t=Object(s.a)(e,(function(t){-1==t[c][i]&&(t[c][i]=o)}));n(t),d(0==o?1:0)},children:-1==t?" ":t})}))})}))})},j=i.a.createContext();function l(){var t=Object(c.useState)([[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]]),e=Object(a.a)(t,2),n=e[0],i=e[1];return Object(u.jsx)(j.Provider,{value:{board:n,setBoard:i},children:Object(u.jsx)(d,{})})}var b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),r(t),o(t)}))};o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root")),b()}},[[12,1,2]]]);
//# sourceMappingURL=main.adb60bd6.chunk.js.map