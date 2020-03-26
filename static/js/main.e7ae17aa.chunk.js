(this["webpackJsonpone-percent-better"]=this["webpackJsonpone-percent-better"]||[]).push([[0],{104:function(e,t,n){},209:function(e,t){},227:function(e,t,n){},229:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(72),i=n.n(o),c=(n(84),n(38)),l=n(11),u=n(1),s=n(17),f=n(18),m=n(10),d=n(19),p=n(20),g=n(2),h=n(23),b=n.n(h),v=n(27),E=n.n(v),x={colors:{turquoise:"#38E0BB",mblue:"#011638",charcoal:"#364156",timberwolf:"#DAD7CD",black:"#000000",postTitle:"#FCDFA6",mediumorchid:"#B847FF",aquamarine:"#93FFD4"},height:{tiny:"30px",small:"48px",medium:"72px",large:"98px"}};function y(){var e=Object(u.a)(["\n  font-family: Courier;\n  display: auto;\n  margin-left: 0;\n  margin-right: 0;\n  text-align: center;\n  font-weight: bold;\n  color: white;\n  margin-bottom: 12px;\n"]);return y=function(){return e},e}var j=g.a.span(y()),O=function(e){var t=e.title;return r.a.createElement(j,null,t)},k=n(35),w=n.n(k);n(104);function C(){var e=Object(u.a)(["\n  font-size: 1.2em;\n  font-weight: bold;\n  font-family: Palatino;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  @media (min-width: 801px) {\n    font-size: 1.5em;\n  }\n"]);return C=function(){return e},e}var T=g.a.span(C(),x.colors.postTitle),P=function(e){var t=e.title;return r.a.createElement(T,null,t)};function B(){var e=Object(u.a)(["\n  transform-origin: 0;\n  transform: scale(0.5);\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n"]);return B=function(){return e},e}function D(){var e=Object(u.a)(["\n  background-color: ",";\n  padding: 64px;\n  margin-left: 10%;\n  margin-right: 10%;\n  text-align: left;\n  border-radius: 10px;\n"]);return D=function(){return e},e}function F(){var e=Object(u.a)(["\n  color: ",";\n  font-size: 0.8em;\n  margin-bottom: 12px\n"]);return F=function(){return e},e}var S=n(105),N=function(e){var t=e.title,n=e.date,a=e.content;e.labels;return r.a.createElement(q,null,r.a.createElement(P,{title:t}),r.a.createElement(M,null,w()(n,"dddd, mmmm dS, yyyy, h:MM:ss TT")),r.a.createElement("div",{style:{fontFamily:"Palatino"}},r.a.createElement(S,{source:a,escapeHtml:!1})))},z=function(e){var t=e.data;return console.log(t),r.a.createElement(Z,null,t.map((function(e,t){return console.log(e),r.a.createElement("div",{key:e._id,index:t,style:{marginBottom:"24px"}},r.a.createElement(N,{title:e.title,date:e.createdAt,content:e.content,labels:e.labels}))})))},R=function(){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"}),"Fetching Posts"))},A=function(){return r.a.createElement("span",null,r.a.createElement("td",null,r.a.createElement("i",{className:"fas fa-exclamation-triangle"}),"Could not fetch posts"))},M=g.a.div(F(),x.colors.timberwolf),q=g.a.div(D(),x.colors.black),Z=g.a.div(B()),I=function(e){var t=e.data,n=e.fetched,a=e.loading,o=e.error;switch(console.log(t),!0){case!n&&a:return r.a.createElement(R,null);case o:return r.a.createElement(A,null);default:return r.a.createElement(z,{data:t})}};function J(){var e=Object(u.a)(["\n  fontFamily: Merriweather;\n  margin-top: 24px;\n  transform-origin: 0;\n  transform: translateZ(10px);\n"]);return J=function(){return e},e}function W(){var e=Object(u.a)(["\n  background-image: url(",");\n  background-size: 500%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: translateZ(0px);\n"]);return W=function(){return e},e}function H(){var e=Object(u.a)(["\n  margin-top: 50px;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  perspective: 20px;\n  perspective-origin: 0%;\n  transform: translateZ(0px);\n"]);return H=function(){return e},e}function $(){var e=Object(u.a)(["\n  background-color: rgba(0,0,0,.5);\n  padding: 10px;\n  position: fixed;\n  width:100%;\n  top:0;\n  z-index: 1;\n"]);return $=function(){return e},e}var _=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={postData:[],loading:!0,fetched:!1,error:!1},a.fetchPostData=a.fetchPostData.bind(Object(m.a)(a)),a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.fetchPostData()}},{key:"render",value:function(){var e=this.state,t=e.postData,n=e.loading,a=e.fetched,o=e.error;return r.a.createElement("div",null,r.a.createElement(G,null,r.a.createElement(O,{title:"ONE PERCENT BETTER"})),r.a.createElement(K,null,r.a.createElement(L,null),r.a.createElement(Q,null,r.a.createElement(I,{data:t.data,loading:n,fetched:a,error:o}))))}},{key:"fetchPostData",value:function(){var e=this;console.log("fetching"),b.a.get("http://localhost:3000/api/posts/").then((function(t){console.log(t),e.setState({postData:t.data,loading:!1,fetched:!0,error:!1})}),(function(t){console.log(t),e.setState({loading:!1,fetched:!1,error:!0})}))}}]),n}(a.Component),G=g.a.header($()),K=g.a.div(H()),L=g.a.div(W(),E.a),Q=g.a.div(J()),U=_;function V(){var e=Object(u.a)(["\n  color: ",";\n  font-weight: bold;\n  font-family: Courier;\n  text-align: center;\n  padding-left: 16px;\n"]);return V=function(){return e},e}var X=g.a.span(V(),(function(e){return e.color?x.colors[e.color]:"red"})),Y=function(e){var t=e.title,n=e.color;return r.a.createElement(X,{color:n},t)};n(184);function ee(){var e=Object(u.a)(["\n  border-radius: 5px;\n  font-family: Courier;\n  padding: 4px;\n"]);return ee=function(){return e},e}function te(){var e=Object(u.a)(["\n  margin-top: 64px;\n  margin-left: 10%;\n  margin-right: 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return te=function(){return e},e}function ne(){var e=Object(u.a)(["\n  margin-top: 12px;\n  border-radius: 5px;\n"]);return ne=function(){return e},e}var ae=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).createPost=a.createPost.bind(Object(m.a)(a)),a.changeTitle=a.changeTitle.bind(Object(m.a)(a)),a.changeContent=a.changeContent.bind(Object(m.a)(a)),a.changePercent=a.changePercent.bind(Object(m.a)(a)),a.state={title:"",content:"",percentBetter:0},a}return Object(f.a)(n,[{key:"changeTitle",value:function(e){this.setState({title:e.target.value||""})}},{key:"changeContent",value:function(e){this.setState({content:e.target.value||"oops"})}},{key:"changePercent",value:function(e){this.setState({percentBetter:parseFloat(e.target.value)||""})}},{key:"createPost",value:function(e){console.log("creating post");var t=this.state,n=t.title,a=t.content,r=t.percentBetter;console.log(a);var o={title:n,content:a,percentBetter:r};b.a.post("http://localhost:3000/api/posts/",o).then((function(e){console.log(e)}),(function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(oe,{onSubmit:this.createPost},r.a.createElement(ie,{placeholder:"Title",type:"text",value:this.state.title,onChange:this.changeTitle,style:{fontSize:"1.2em"}}),r.a.createElement(re,{rows:"30",cols:"100",value:this.state.content,onChange:this.changeContent}),r.a.createElement("label",{style:{display:"flex",flexDirection:"row",height:"24px",alignItems:"center",padding:"12px"}},r.a.createElement("p",{style:{paddingRight:"12px",fontSize:"0.8em",fontFamily:"Courier"}},"PERCENT BETTER"),r.a.createElement(ie,{type:"number",step:"0.05",value:this.state.percentBetter,onChange:this.changePercent})),r.a.createElement("input",{type:"submit",value:"Submit",style:{margin:"12px",fontSize:"1em",padding:"12px"}}))}}]),n}(a.Component),re=g.a.textarea(ne()),oe=g.a.form(te()),ie=g.a.input(ee()),ce=ae;function le(){var e=Object(u.a)(["\n  margin-top: 50px;\n  margin-left: 10%;\n  margin-right: 10%;\n  border-radius: 2px;\n  background-color: black;\n  display: flex;\n  flex-direction: column;\n"]);return le=function(){return e},e}function ue(){var e=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n"]);return ue=function(){return e},e}function se(){var e=Object(u.a)(["\n  background-color: rgba(0,0,0,.5);\n  padding: 10px;\n  position: fixed;\n  width:100%;\n  top:0;\n  display: flex;\n  justify-content: center;\n"]);return se=function(){return e},e}var fe=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(f.a)(n,[{key:"render",value:function(){return r.a.createElement(de,null,r.a.createElement(me,null,r.a.createElement(Y,{title:"ONE PERCENT BETTER",color:"turquoise"}),r.a.createElement(Y,{title:"CREATE",color:"mediumorchid"})),r.a.createElement(pe,null,r.a.createElement(ce,null)))}}]),n}(a.Component),me=g.a.header(se()),de=g.a.div(ue(),E.a),pe=g.a.div(le()),ge=fe;n(227);var he=function(){return r.a.createElement("div",{className:"App",style:{background:x.colors.mblue}},r.a.createElement("header",{className:"App-header"},r.a.createElement(c.a,null,r.a.createElement(l.a,{path:"/home/",component:U})),r.a.createElement(c.a,null,r.a.createElement(l.a,{path:"/create/",component:ge}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},27:function(e,t,n){e.exports=n.p+"static/media/homebg.fa872aa7.jpg"},79:function(e,t,n){e.exports=n(229)},84:function(e,t,n){}},[[79,1,2]]]);
//# sourceMappingURL=main.e7ae17aa.chunk.js.map