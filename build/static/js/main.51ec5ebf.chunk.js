(window.webpackJsonpdashboard=window.webpackJsonpdashboard||[]).push([[0],{37:function(e,t,n){e.exports=n(63)},42:function(e,t,n){},49:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=n.n(o),i=(n(42),n(6)),l=n(7),s=n(9),u=n(8),d=n(3),h=n(10),p=n(1),m=n(5),b=n(2);function f(){var e=Object(p.a)(["\n    border: 3px solid black;\n"]);return f=function(){return e},e}function x(){var e=Object(p.a)(["\n    color: black;\n    font-size: 20px;\n    margin: 5px 0px;\n    text-align: center;\n    text-shadow: 1px 1px white;\n"]);return x=function(){return e},e}function g(){var e=Object(p.a)(["\n    font-size: 26px;\n    margin: 5px 0px;\n    text-align: center;\n    text-shadow: 1px 1px white;\n"]);return g=function(){return e},e}function k(){var e=Object(p.a)(["\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    font-size: 20px;\n    justify-content: center;\n    margin: 5px 0px;\n    text-align: center;\n"]);return k=function(){return e},e}function v(){var e=Object(p.a)(["\n    align-items: center;\n    display: flex;\n    justify-content: center;\n"]);return v=function(){return e},e}function E(){var e=Object(p.a)(["\n    color: white;\n    font-size: 36px;\n    margin: 5px 0px;\n    text-align: center;\n    text-shadow: 2px 2px black;\n"]);return E=function(){return e},e}function j(){var e=Object(p.a)(["\n    background: rgb(255,255,157);\n    background: linear-gradient(135deg, \n                rgba(255,255,157,1) 0%, \n                rgba(153,153,65,1) 78%, \n                rgba(117,117,29,1) 93%, \n                rgba(94,94,11,1) 100%);\n    background-size: cover;\n    border: solid 2px black;\n    box-shadow: 5px 5px 5px rgba(0,0,0,0.6);\n    display: flex;\n    height: 300px;\n    color: black;\n    margin: 20px;\n    padding: 40px 20px;\n    text-shadow: 2px 2px black;\n    width: 350px;\n"]);return j=function(){return e},e}function O(){var e=Object(p.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    padding: 20px;\n"]);return O=function(){return e},e}var w=b.a.section(O()),y=b.a.section(j()),T=b.a.h1(E()),C=b.a.section(v()),D=b.a.div(k()),S=b.a.h2(g()),I=b.a.p(x()),F=b.a.img(f()),N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.taskState.tasks,t=e.map((function(e,t){return r.a.createElement(m.b,{to:"".concat(e.type,"/id/").concat(e._id),key:t},r.a.createElement(y,null,e.taskItem?r.a.createElement(S,null,e.taskItem):null,e.url?r.a.createElement(I,null,e.url):null,e.thumbnail?r.a.createElement(F,{alt:null,src:e.thumbnail}):null,e.title?r.a.createElement(S,null,e.title):null,e.description?r.a.createElement(I,null,e.description):null,e.Poster?r.a.createElement(F,{alt:null,src:e.Poster}):null,e.title?r.a.createElement(S,null,e.Title):null))}));return console.log(e),r.a.createElement("div",null,r.a.createElement(w,null,r.a.createElement(T,null,"Task List"),r.a.createElement(C,null,r.a.createElement(D,null,t))))}}]),t}(a.Component),R=(n(49),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"newButtonContainer"},r.a.createElement(m.b,{to:"/NewToDo/"},r.a.createElement("div",{className:"boxImage"},"New Do")),r.a.createElement(m.b,{to:"/NewToRead/"},r.a.createElement("div",{className:"boxImage"},"New Read"))))}}]),t}(a.Component)),A=n(33);function z(){var e=Object(p.a)(["\n    background-color: #2F4562;\n    border: 1px solid lightslategray;\n    /* box-shadow: 0px 0px 5px yellow; */\n    margin: 20px;\n    padding: 5px;\n    text-shadow: 2px 2px black;\n    text-align: center;\n    width: 100px;\n"]);return z=function(){return e},e}function L(){var e=Object(p.a)(["\n    color: #FFFF9D;\n    font-size: 20px;\n    margin: 10px;\n    text-shadow: 2px 2px black;\n"]);return L=function(){return e},e}function P(){var e=Object(p.a)(["\n    color: white;\n    font-size: 30px;\n    text-shadow: 2px 2px black;\n"]);return P=function(){return e},e}function U(){var e=Object(p.a)(["\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    background-color:  rgba( 0,0,0,0.6);\n    border: solid 2px #FFFF9D;\n    border-radius: 25px;\n    color: white;\n    margin-top: 125px;\n    padding: 10px;\n    width: 300px;\n"]);return U=function(){return e},e}function V(){var e=Object(p.a)(["\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n"]);return V=function(){return e},e}var B=b.a.article(V()),J=b.a.form(U()),G=b.a.h1(P()),H=b.a.label(L()),Y=b.a.div(z()),_=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={taskItem:"",due:"",notes:"",type:"todo"},n.handleValueChange=n.handleValueChange.bind(Object(d.a)(n)),n.submitTask=n.submitTask.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleValueChange",value:function(e,t){this.setState(Object(A.a)({},e,t))}},{key:"submitTask",value:function(){fetch("https://todolist-sei32.herokuapp.com/todo/",{method:"POST",headers:{"Content-Type":"application/json",Connection:"keep-alive","Cache-Control":"no-cache",Accept:"*/*"},body:JSON.stringify(this.state)}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(B,null,r.a.createElement(J,null,r.a.createElement(G,null,"Create New Task"),r.a.createElement(H,null,"Pick a date"),r.a.createElement("input",{name:"due",type:"date",placeholder:"Due",onChange:function(t){return e.handleValueChange("due",t.target.value)}}),r.a.createElement(H,null,"Task"),r.a.createElement("input",{name:"taskItem",type:"text",placeholder:"Task",onChange:function(t){return e.handleValueChange("taskItem",t.target.value)}}),r.a.createElement(H,null,"Notes"),r.a.createElement("input",{name:"notes",type:"text",placeholder:"Notes",onChange:function(t){return e.handleValueChange("url",t.target.value)}}),r.a.createElement(m.b,{to:"/"},r.a.createElement(Y,{onClick:this.submitTask},"Submit")))))}}]),t}(a.Component),M=n(34),W=n.n(M),q={height:"350px",display:"flex",flexDirection:"column",width:"350px",justifyContent:"center",alignItems:"center",backgroundColor:"#eee"},K=function(e){var t=e.choice,n=e.bookInfo;return r.a.createElement("div",{style:q},n.volumeInfo.title,r.a.createElement("img",{alt:"book from a search",src:n.volumeInfo.imageLinks.thumbnail,onClick:t}))};function $(){var e=Object(p.a)(["\n    align-items: center;\n    background-color: #2F4562;\n    border: 1px solid #FFFF9D;\n    color: white;\n    display: flex;\n    justify-content: center;\n    margin: 20px;\n    padding: 5px;\n    text-shadow: 2px 2px black;\n    text-align: center;\n    width: 100px;\n"]);return $=function(){return e},e}function Q(){var e=Object(p.a)(["\n    color: #FFFF9D;\n    font-size: 20px;\n    margin: 20px;\n    text-shadow: 2px 2px black;\n"]);return Q=function(){return e},e}function X(){var e=Object(p.a)(["\n    color: white;\n    font-size: 30px;\n    text-shadow: 2px 2px black;\n"]);return X=function(){return e},e}function Z(){var e=Object(p.a)(["\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    background-color:  rgba( 0,0,0,0.6);\n    border: solid 2px #FFFF9D;\n    color: white;\n    margin-top: 125px;\n    padding: 10px;\n    width: 80vw;\n"]);return Z=function(){return e},e}function ee(){var e=Object(p.a)(["\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n"]);return ee=function(){return e},e}var te=n(26),ne=b.a.article(ee()),ae=b.a.form(Z()),re=b.a.h1(X()),oe=b.a.label(Q()),ce=b.a.div($()),ie={},le=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={searchText:null,searchResponse:[],descriptionInput:"",dateAndTime:Date},n.onSearchChange=n.onSearchChange.bind(Object(d.a)(n)),n.onEnter=n.onEnter.bind(Object(d.a)(n)),n.afterSearch=n.afterSearch.bind(Object(d.a)(n)),n.selectOne=n.selectOne.bind(Object(d.a)(n)),n.onInputChange=n.onInputChange.bind(Object(d.a)(n)),n.submitAction=n.submitAction.bind(Object(d.a)(n)),n.buildObject=n.buildObject.bind(Object(d.a)(n)),n.onDateChange=n.onDateChange.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"onSearchChange",value:function(e,t){this.setState({searchText:e})}},{key:"onInputChange",value:function(e){console.log(e.target.value),this.setState({descriptionInput:e.target.value})}},{key:"afterSearch",value:function(e){this.setState({searchResponse:e})}},{key:"selectOne",value:function(e){this.setState({searchResponse:[this.state.searchResponse.find((function(t){return t.volumeInfo.title===e}))]})}},{key:"onEnter",value:function(e,t){var n=this,a="".concat("https://www.googleapis.com/books/v1/volumes?q=+intitle:").concat(this.state.searchText).concat("&key=AIzaSyD5tsK6CR7eAgHDP8UYHk7CPIBevw6sRUk");fetch(a).then((function(e){return e.json()})).then((function(e){for(var t=[],a=0;a<10;a++)t.push(e.items[a]);n.afterSearch(t)})).catch((function(e){console.error(e)}))}},{key:"buildObject",value:function(){ie.title=this.state.searchResponse[0].volumeInfo.title,ie.thumbnail=this.state.searchResponse[0].volumeInfo.imageLinks.thumbnail,ie.description=this.state.descriptionInput,ie.due=this.state.dateAndTime,ie.type="toread",console.log(ie)}},{key:"onDateChange",value:function(e){this.setState({dateAndTime:e._d})}},{key:"submitAction",value:function(){this.buildObject(),fetch("https://todolist-sei32.herokuapp.com/toread/",{method:"POST",mode:"cors",body:JSON.stringify(ie),headers:{"Content-Type":"application/json",Connection:"keep-alive","Cache-Control":"no-cache","Access-Control-Allow-Origin":"*",Host:"https://todolist-sei32.herokuapp.com/"}}).then((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;console.log(this.state.searchResponse);var t=this.state.searchResponse.map((function(t){return r.a.createElement(K,{bookInfo:t,choice:function(t){return e.selectOne(t.target.parentNode.innerText)}})}));new Date;return r.a.createElement("div",null,r.a.createElement(ne,null,r.a.createElement(ae,null,r.a.createElement(re,null,"Search For Your Book"),r.a.createElement(oe,null,"Pick a date:"),r.a.createElement(te,{dateFormat:!0,onChange:function(t){return e.onDateChange(t)}}),r.a.createElement(oe,null,"Search books:"),r.a.createElement(W.a,{placeholder:"Search",onChange:function(t,n){return e.onSearchChange(t,n)},onEnter:function(t,n){return e.onEnter(t,n)}}),t,r.a.createElement(oe,null,"Notes:"),r.a.createElement("input",{onChange:function(t){return e.onInputChange(t)}}),r.a.createElement(ce,{style:se,onClick:function(){return e.submitAction()}},"Submit"))))}}]),t}(a.Component),se={height:"50px",width:"200px",margin:"30px"};function ue(){var e=Object(p.a)(["\n    background-color: #172231;\n    border: 3px solid #2E4562;\n    /* box-shadow: 0px 0px 5px yellow; */\n    margin: 20px;\n    padding: 5px;\n    text-shadow: 2px 2px black;\n    text-align: center;\n    width: 100px;\n"]);return ue=function(){return e},e}function de(){var e=Object(p.a)(["\n    color: black;\n    font-size: 20px;\n    margin: 5px 0px;\n    text-align: center;\n    text-shadow: 1px 1px white;\n"]);return de=function(){return e},e}function he(){var e=Object(p.a)(["\n    font-size: 26px;\n    margin: 5px 0px;\n    text-align: center;\n    text-shadow: 1px 1px white;\n"]);return he=function(){return e},e}function pe(){var e=Object(p.a)(["\n    align-items: center;\n    background: rgb(255,255,157);\n    background: linear-gradient(135deg, \n                rgba(255,255,157,1) 0%, \n                rgba(153,153,65,1) 78%, \n                rgba(117,117,29,1) 93%, \n                rgba(94,94,11,1) 100%);\n    background-size: cover;\n    border: solid 2px black;\n    box-shadow: 5px 5px 5px rgba(0,0,0,0.6);\n    color: black;\n    display: flex;\n    flex-direction: column;\n    font-size: 16px;\n    height: 350px;\n    justify-content: space-evenly;\n    margin: 20px;\n    padding: 20px 20px;\n    text-shadow: 2px 2px white;\n    width: 350px;\n"]);return pe=function(){return e},e}var me=b.a.article(pe()),be=b.a.h2(he()),fe=b.a.p(de()),xe=b.a.div(ue()),ge=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={doTask:{},doURL:n.props.match.url},n.deleteDoTask=n.deleteDoTask.bind(Object(d.a)(n)),n.fetchDoTask=n.fetchDoTask.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchDoTask()}},{key:"fetchDoTask",value:function(){var e=this;fetch("https://todolist-sei32.herokuapp.com"+this.state.doURL,{method:"GET"}).then((function(t){return t.json().then((function(t){e.setState({doTask:t[0]})}))}))}},{key:"deleteDoTask",value:function(){fetch("https://todolist-sei32.herokuapp.com"+this.state.doURL,{method:"DELETE",headers:{"Content-Type":"application/json",Connection:"keep-alive","Cache-Control":"no-cache",Accept:"*/*"}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),this.props.location.push("/")}},{key:"render",value:function(){var e=this.state.doTask;return r.a.createElement("div",null,r.a.createElement(me,null,r.a.createElement("section",null,r.a.createElement(be,null,e.taskItem),r.a.createElement(fe,null,e.url)),r.a.createElement("section",null,r.a.createElement(m.b,{to:"/"},r.a.createElement(xe,{onClick:this.deleteDoTask},"Delete Task")))))}}]),t}(a.Component);function ke(){var e=Object(p.a)(["\n    background-color: #172231;\n    border: 3px solid #2E4562;\n    /* box-shadow: 0px 0px 5px yellow; */\n    padding: 5px;\n    text-shadow: 2px 2px black;\n    text-align: center;\n    width: 100px;\n"]);return ke=function(){return e},e}function ve(){var e=Object(p.a)(["\n    border: 3px solid black;\n    height: auto;\n    max-width: 200px;\n"]);return ve=function(){return e},e}function Ee(){var e=Object(p.a)(["\n    color: black;\n    font-size: 20px;\n    margin: 5px 0px;\n    text-align: center;\n    text-shadow: 1px 1px white;\n"]);return Ee=function(){return e},e}function je(){var e=Object(p.a)(["\n    font-size: 26px;\n    margin: 5px 0px;\n    text-align: center;\n    text-shadow: 1px 1px white;\n"]);return je=function(){return e},e}function Oe(){var e=Object(p.a)(["\n    align-items: center;\n    background: rgb(255,255,157);\n    background: linear-gradient(135deg, \n                rgba(255,255,157,1) 0%, \n                rgba(153,153,65,1) 78%, \n                rgba(117,117,29,1) 93%, \n                rgba(94,94,11,1) 100%);\n    background-size: cover;\n    border: solid 2px black;\n    box-shadow: 5px 5px 5px rgba(0,0,0,0.6);\n    color: black;\n    display: flex;\n    flex-direction: column;\n    font-size: 16px;\n    height: 350px;\n    justify-content: center;\n    margin: 20px;\n    padding: 10px 20px;\n    text-shadow: 2px 2px white;\n    width: 350px;\n"]);return Oe=function(){return e},e}var we=b.a.article(Oe()),ye=b.a.h2(je()),Te=b.a.p(Ee()),Ce=b.a.img(ve()),De=b.a.div(ke()),Se="https://todolist-sei32.herokuapp.com",Ie=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={readTask:[],readUrl:n.props.match.url},n.deleteDoTask=n.deleteReadTask.bind(Object(d.a)(n)),n.fetchReadTask=n.fetchReadTask.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchReadTask()}},{key:"fetchReadTask",value:function(){var e=this;fetch(Se+this.state.readUrl,{method:"GET"}).then((function(t){return t.json().then((function(t){e.setState({readTask:t[0]})}))}))}},{key:"deleteReadTask",value:function(){fetch(Se+this.state.readUrl,{method:"DELETE",headers:{"Content-Type":"application/json",Connection:"keep-alive","Cache-Control":"no-cache",Accept:"*/*"}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return console.log(this.state.readTask),r.a.createElement("div",null,r.a.createElement(we,null,r.a.createElement(Ce,{src:this.state.readTask.thumbnail,alt:this.state.readTask.title}),r.a.createElement("section",null,r.a.createElement(ye,null,this.state.readTask.title),r.a.createElement(Te,null,this.state.readTask.description)),r.a.createElement("section",null,r.a.createElement(m.b,{to:"/"},r.a.createElement(De,{onClick:this.deleteReadTask},"Delete Task")))))}}]),t}(a.Component),Fe=n(14),Ne=(n(62),n(26)),Re=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={tasks:[],dateAndTime:null},n.onDateChange=n.onDateChange.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"onDateChange",value:function(e){var t=this,n=new Date(e._d);n=(n=JSON.stringify(n)).slice(1,11),this.setState({dateAndTime:n}),this.state.dateAndTime&&fetch("https://todolist-sei32.herokuapp.com/index/"+this.state.dateAndTime,{method:"GET",headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json().then((function(e){t.setState({tasks:e})}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar"},r.a.createElement(m.b,{to:"/"},r.a.createElement("h1",{className:"logo"},"YouDue",r.a.createElement("span",{role:"img"},"\u270f\ufe0f"))),r.a.createElement("section",null,r.a.createElement("p",{className:"pickDate blinking"},"Double-Click A Date"),r.a.createElement(Ne,{className:"dateTime",dateFormat:!0,onChange:function(t){return e.onDateChange(t)}})),r.a.createElement(m.b,{to:"/NewTask/"},r.a.createElement("h4",{className:"createTask "},"Create New Task"))),r.a.createElement("section",null,r.a.createElement(Fe.a,{path:"/",exact:!0,render:function(){return r.a.createElement(N,{taskState:e.state})}}),r.a.createElement(Fe.a,{path:"/NewTask/",exact:!0,render:function(t){return r.a.createElement(R,Object.assign({},t,e.state))}}),r.a.createElement(Fe.a,{path:"/NewToDo/",exact:!0,render:function(t){return r.a.createElement(_,Object.assign({},t,e.state))}}),r.a.createElement(Fe.a,{path:"/NewToRead/",exact:!0,render:function(t){return r.a.createElement(le,Object.assign({},t,e.state))}}),r.a.createElement(Fe.a,{path:"/todo/id/:id",exact:!0,render:function(t){return r.a.createElement(ge,Object.assign({},t,e.state))}}),r.a.createElement(Fe.a,{path:"/toread/id/:id",exact:!0,render:function(t){return r.a.createElement(Ie,Object.assign({},t,e.state))}})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(m.a,null,r.a.createElement("style",null,"@import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');"),r.a.createElement(Re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.51ec5ebf.chunk.js.map