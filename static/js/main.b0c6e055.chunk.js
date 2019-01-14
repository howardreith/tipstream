(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,n){e.exports=n(242)},242:function(e,t,n){"use strict";n.r(t);var a,r=n(0),i=n.n(r),c=n(50),s=n.n(c),o=n(13),u=n(11),l=n(105),m=n(249),p=n(248),d=n(247),h=n(3),f=n(2),v=n(8),E=n(6),b=n(9),y=n(19),S=n.n(y),O=n(22),g=n(32),j=n(106),I=n.n(j),k="https://tipstream-api.herokuapp.com/",w="http://localhost:3001";a="localhost"===window.location.hostname?w:k;var N=I.a.create({baseURL:a}),C=n(107),A=n.n(C)()(),T=function(e){return function(){var t=Object(g.a)(S.a.mark(function t(n){var a;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.get("/streams/".concat(e));case 2:a=t.sent,n({type:"FETCH_STREAM",payload:a.data});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},_=n(244),D=n(243),R=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).renderInput=function(e){var t=e.input,a=e.label,r=e.meta;return i.a.createElement("div",{className:"field"},i.a.createElement("label",null,a),i.a.createElement("input",Object.assign({},t,{autoComplete:"off"})),n.renderError(r))},n.onSubmit=function(e){n.props.onSubmit(e)},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"renderError",value:function(e){var t=e.error;if(e.touched&&t)return i.a.createElement("div",{className:"ui error message"},i.a.createElement("div",{className:"header"},t))}},{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error"},i.a.createElement(_.a,{name:"title",component:this.renderInput,label:"Enter Title"}),i.a.createElement(_.a,{name:"description",component:this.renderInput,label:"Enter Description"}),i.a.createElement("button",{className:"ui button primary"},"Submit"))}}]),t}(i.a.Component),x=Object(D.a)({form:"streamForm",validate:function(e){var t={};return e.title||(t.title="Please enter a title"),e.description||(t.description="Please enter a description"),t}})(R),M=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.createStream(e)},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h3",null,"Create a Stream"),i.a.createElement(x,{onSubmit:this.onSubmit}))}}]),t}(i.a.Component),P=Object(o.b)(null,{createStream:function(e){return function(){var t=Object(g.a)(S.a.mark(function t(n,a){var r,i;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,t.next=3,N.post("/streams",Object(O.a)({},e,{userId:r}));case 3:i=t.sent,n({type:"CREATE_STREAM",payload:i.data}),A.push("/");case 6:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}})(M),L=n(39),U=n.n(L),F=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.editStream(n.props.match.params.id,e)},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){return this.props.stream?i.a.createElement("div",null,i.a.createElement("h3",null,"Edit a Stream"),i.a.createElement(x,{initialValues:U.a.pick(this.props.stream,"title","description"),onSubmit:this.onSubmit})):i.a.createElement("div",null,"Loading...")}}]),t}(i.a.Component),G=Object(o.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:T,editStream:function(e,t){return function(){var n=Object(g.a)(S.a.mark(function n(a){var r;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,N.patch("/streams/".concat(e),t);case 2:r=n.sent,a({type:"EDIT_STREAM",payload:r.data}),A.push("/");case 5:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()}})(F),H=n(245),q=function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStreams()}},{key:"renderAdmin",value:function(e){if(e.userId===this.props.userId)return i.a.createElement("div",{className:"right floated content"},i.a.createElement(H.a,{to:"/streams/edit/".concat(e.id),className:"ui button primary"},"Edit"),i.a.createElement(H.a,{to:"/streams/delete/".concat(e.id),className:"ui button negative"},"Delete"))}},{key:"renderList",value:function(){var e=this;return this.props.streams.map(function(t){return i.a.createElement("div",{className:"item",key:t.id},e.renderAdmin(t),i.a.createElement("div",{className:"content"},i.a.createElement(H.a,{to:"/streams/".concat(t.id),className:"header"},t.title),i.a.createElement("div",{className:"description"},t.description)))})}},{key:"renderCreate",value:function(){if(this.props.isSignedIn)return i.a.createElement("div",{style:{textAlign:"right"}},i.a.createElement(H.a,{to:"/streams/new",className:"ui button primary"},"Create Stream"))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Streams"),i.a.createElement("div",{className:"ui celled list"},this.renderList()),this.renderCreate())}}]),t}(i.a.Component),B=Object(o.b)(function(e){return{streams:Object.values(e.streams),userId:e.auth.userId,isSignedIn:e.auth.isSignedIn}},{fetchStreams:function(){return function(){var e=Object(g.a)(S.a.mark(function e(t){var n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.get("/streams");case 2:n=e.sent,t({type:"FETCH_STREAMS",payload:n.data});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(q),J=function(e){return s.a.createPortal(i.a.createElement("div",{onClick:e.onDismiss,className:"ui dimmer modals visible active"},i.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},i.a.createElement("div",{className:"header"},e.title),i.a.createElement("div",{className:"content"},e.content),i.a.createElement("div",{className:"action"},e.actions))),document.querySelector("#modal"))},V=function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"renderActions",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){return e.props.deleteStream(e.props.match.params.id)},className:"ui button negative"},"Delete"),i.a.createElement(H.a,{to:"/",className:"ui button"},"Cancel")))}},{key:"renderContent",value:function(){return this.props.stream?"Are you sure you want to delete the stream with title: ".concat(this.props.stream.title):"Are you sure you want to delete this stream?"}},{key:"render",value:function(){return i.a.createElement(J,{title:"Delete Stream",content:this.renderContent(),actions:this.renderActions(),onDismiss:function(){return A.push("/")}})}}]),t}(i.a.Component),X=Object(o.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:T,deleteStream:function(e){return function(){var t=Object(g.a)(S.a.mark(function t(n){return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.delete("/streams/".concat(e));case 2:n({type:"DELETE_STREAM",payload:e}),A.push("/");case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(V),K=n(109),W=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(v.a)(this,Object(E.a)(t).call(this,e))).videoRef=i.a.createRef(),n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.fetchStream(e),this.buildPlayer()}},{key:"componentDidUpdate",value:function(){this.buildPlayer()}},{key:"componentWillUnmount",value:function(){this.player.destroy()}},{key:"buildPlayer",value:function(){if(!this.player&&this.props.stream){var e=this.props.match.params.id;this.player=K.a.createPlayer({type:"flv",url:"http://localhost:8000/live/".concat(e,".flv")}),this.player.attachMediaElement(this.videoRef.current),this.player.load()}}},{key:"render",value:function(){if(this.props.stream){var e=this.props.stream,t=e.title,n=e.description;return i.a.createElement("div",null,i.a.createElement("video",{ref:this.videoRef,style:{width:"100%"},controls:!0}),i.a.createElement("h1",null,t),i.a.createElement("h4",null,n))}return i.a.createElement("div",null,"Loading...")}}]),t}(i.a.Component),z=Object(o.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:T})(W),Q=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).onAuthChange=function(e){e?n.props.signIn(n.auth.currentUser.get().getId()):n.props.signOut()},n.onSignInClick=function(){n.auth.signIn()},n.onSignOutClick=function(){n.auth.signOut()},n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"326254808743-oqfspace8f7v5i0irb7bv37m7m1gn08l.apps.googleusercontent.com",scope:"email"}).then(function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)})})}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?i.a.createElement("button",{onClick:this.onSignOutClick,className:"ui red google button"},i.a.createElement("i",{className:"google icon"}),"Sign Out"):i.a.createElement("button",{onClick:this.onSignInClick,className:"ui red google button"},i.a.createElement("i",{className:"google icon"}),"Sign In with Google")}},{key:"render",value:function(){return i.a.createElement("div",null,this.renderAuthButton())}}]),t}(i.a.Component),Y=Object(o.b)(function(e){return{isSignedIn:e.auth.isSignedIn}},{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(Q),Z=function(){return i.a.createElement("div",{className:"ui secondary pointing menu"},i.a.createElement(H.a,{to:"/",className:"item"},"TipStream"),i.a.createElement("div",{className:"right menu"},i.a.createElement(H.a,{to:"/",className:"item"},"All Streams"),i.a.createElement(Y,null)))},$=function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(m.a,{history:A},i.a.createElement("div",null,i.a.createElement(Z,null),i.a.createElement(p.a,null,i.a.createElement(d.a,{path:"/",exact:!0,component:B}),i.a.createElement(d.a,{path:"/streams/new",exact:!0,component:P}),i.a.createElement(d.a,{path:"/streams/edit/:id",exact:!0,component:G}),i.a.createElement(d.a,{path:"/streams/delete/:id",exact:!0,component:X}),i.a.createElement(d.a,{path:"/streams/:id",exact:!0,component:z})))))},ee=n(246),te={isSignedIn:null,userId:null},ne=n(31),ae=Object(u.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(O.a)({},e,{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Object(O.a)({},e,{isSignedIn:!1,userId:null});default:return e}},form:ee.a,streams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_STREAM":case"CREATE_STREAM":case"EDIT_STREAM":return Object(O.a)({},e,Object(ne.a)({},t.payload.id,t.payload));case"FETCH_STREAMS":return Object(O.a)({},e,U.a.mapKeys(t.payload,"id"));case"DELETE_STREAM":return U.a.omit(e,t.payload);default:return e}}}),re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,ie=Object(u.e)(ae,re(Object(u.a)(l.a)));s.a.render(i.a.createElement(o.a,{store:ie},i.a.createElement($,null)),document.querySelector("#root"))}},[[111,2,1]]]);
//# sourceMappingURL=main.b0c6e055.chunk.js.map