(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,n,t){e.exports=t(85)},47:function(e,n,t){},49:function(e,n,t){},85:function(e,n,t){"use strict";t.r(n);var o=t(4),a=t.n(o),c=t(39),i=t.n(c),s=(t(47),t(14)),r=t(15),l=t(17),m=t(16),u=t(18),d=(t(49),t(40)),h=t.n(d),f=t(41),p=t.n(f),v=h()("https://msleia.herokuapp.com/command"),w=p.a.over(v),g=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(l.a)(this,Object(m.a)(n).call(this,e))).state={socket:v,ws:w,command:"init",timeStamp:Date.now()},t.connectionHandler=function(){console.log("I am hereer!!!!!!!!!!!!!!!!!!")},t}return Object(u.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){this.initiate_con("init")}},{key:"initiate_con",value:function(e){var n=this,t=this.state.ws;t.connect({},function(e){console.log("Please chal ja mere bhai")}),console.log(t);var o=this.state.socket;o.onopen=function(){console.log("Connected"),n.sendMessage("Hello from server")},o.onmessage=function(e){if(console.log("what the hell??"),e.data instanceof Object&&"command"in e.data){console.log(e.data.command);var t=e.data.command;n.setState({command:t}),n.setState({timeStamp:Date.now()})}}}},{key:"sendMessage",value:function(e){this.state.ws.send({message:e})}},{key:"receiveMsg",value:function(){}},{key:"render",value:function(){var e=this.state.command;return a.a.createElement("span",null,e)}}]),n}(o.Component),b=function(e){function n(){return Object(s.a)(this,n),Object(l.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("img",{src:"code.png",height:"1%",width:"100%"}),a.a.createElement(g,null))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,2,1]]]);
//# sourceMappingURL=main.f18b8cd9.chunk.js.map