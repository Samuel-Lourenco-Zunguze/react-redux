(this["webpackJsonpfundamamentos-react-redux1"]=this["webpackJsonpfundamamentos-react-redux1"]||[]).push([[0],{19:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),s=n(2),o=n(3),u=n(6),l=n(5),b=(n(19),n(4)),j=n(9),d=n(1),m=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={nome:""},t.modificacoes=function(e){return t.setState(Object(j.a)({},e.target.name,[e.target.value]))},t.submit=function(e){e.preventDefault();var n={id:Math.floor(1e3*(Math.random()+1)),nome:t.state.nome[0]};t.props.addItem(n)},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"input",children:Object(d.jsxs)("form",{onSubmit:this.submit,children:[Object(d.jsx)("input",{name:"nome",type:"text",onChange:this.modificacoes}),Object(d.jsx)("input",{onClick:this.submit,type:"button",value:"submeter"})]})})}}]),n}(a.Component),O=Object(b.b)((function(t){return{usuario:t.teste}}),{addItem:function(t){return{type:"addItem",item:t}}})(m),p=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).limparDados=function(){t.props.limparLista()},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"btn",onClick:this.limparDados,children:"Limpar lista"})})}}]),n}(a.Component),f=Object(b.b)(null,{limparLista:function(){return{type:"limparLista"}}})(p),h=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).deleteItem=function(e){t.props.delItem(e)},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.props.dados.map((function(e){return Object(d.jsxs)("li",{className:"li",children:[Object(d.jsx)("button",{className:"btn-del",onClick:t.deleteItem.bind(t,e.id),children:"X"}),Object(d.jsx)("span",{children:e.nome})]},e.id)}));return Object(d.jsx)("ul",{className:"lista",children:e})}}]),n}(a.Component),v=Object(b.b)((function(t){return{dados:t.teste}}),{delItem:function(t){return{type:"delItem",id:t}}})(h),x=n(14),y=n(13),g=n(7),I={teste:[]};var C=Object(x.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"getItems":return Object(g.a)({},t);case"addItem":return Object(g.a)(Object(g.a)({},t),{},{teste:[].concat(Object(y.a)(t.teste),[e.item])});case"delItem":return Object(g.a)(Object(g.a)({},t),{},{teste:t.teste.filter((function(t){return t.id!==e.id}))});case"limparLista":return Object(g.a)(Object(g.a)({},t),{},{teste:t.teste=[]});default:return t}})),k=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)(b.a,{store:C,children:Object(d.jsxs)("div",{className:"geral",children:[Object(d.jsx)(O,{}),Object(d.jsx)(v,{}),Object(d.jsx)(f,{})]})})}}]),n}(a.Component),w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),w()}},[[25,1,2]]]);
//# sourceMappingURL=main.9c8a4b96.chunk.js.map