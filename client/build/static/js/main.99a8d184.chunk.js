(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,a,t){e.exports=t.p+"static/media/silverStar.aefeefe2.png"},12:function(e,a,t){e.exports=t.p+"static/media/goldStar.22917d8d.png"},15:function(e,a,t){e.exports=t.p+"static/media/bronze-silverStar.ff789784.png"},16:function(e,a,t){e.exports=t.p+"static/media/bronze-silver-goldStar.a1309f91.png"},29:function(e,a,t){e.exports=t.p+"static/media/adulting.0f90c057.png"},31:function(e,a,t){e.exports=t.p+"static/media/adultingstatus.36dde76a.png"},33:function(e,a,t){e.exports=t(68)},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(28),r=t.n(c),i=t(13),s=t(1),o=t(4),m=t.n(o);var u=function(){return Object(n.useEffect)((function(){var e=document.querySelector(".sidenav");window.M.Sidenav.init(e,{edge:"left",inDuration:250})}),[]),l.a.createElement("nav",null,l.a.createElement("div",{className:"#69f0ae green accent-2 nav-wrapper"},l.a.createElement("a",{href:"/login",className:"brand-logo"},"ADULTING"),l.a.createElement("a",{href:"/Home","data-target":"mobile-demo",className:"sidenav-trigger"},l.a.createElement("i",{className:"material-icons"},"menu")),l.a.createElement("ul",{className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement("a",{href:"/AllActivities"},"Activity Log")),l.a.createElement("li",null,l.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),m.a.post("api/user/logout").then((function(e){window.location.replace("/login")}))}},"Log Out")))),l.a.createElement("ul",{className:"sidenav",id:"mobile-demo"},l.a.createElement("li",null,l.a.createElement("a",{href:"/AllActivities"},"Activity Log")),l.a.createElement("li",null,l.a.createElement("a",{href:"/login"},"Log Out"))))},d=t(2);t(56);function p(){var e=Object(n.useRef)(null),a=Object(n.useRef)(null),t=Object(n.useState)([]),c=Object(d.a)(t,2),r=c[0],i=c[1],s=Object(n.useState)([]),o=Object(d.a)(s,2),u=o[0],p=o[1],E=Object(n.useState)("Choose an Category"),v=Object(d.a)(E,2),g=v[0],f=v[1],h=Object(n.useState)("Choose an Activity"),b=Object(d.a)(h,2),N=b[0],w=b[1],y=Object(n.useState)([]),O=Object(d.a)(y,2),j=O[0],A=O[1],S=JSON.parse(localStorage.user),C=function(){m.a.get("api/log/".concat(S._id)).then((function(e){console.log(e.data),p(e.data),console.log(u)})).catch((function(e){return console.log(e)}))};Object(n.useEffect)((function(){m.a.get("api/activities").then((function(e){console.log(e.data),i(e.data),A(e.data)})),0===u.length&&C()}),[]);return l.a.createElement("div",null,l.a.createElement("h4",null,"Start ADULTING and earn awards today!"),l.a.createElement("div",{className:"col s12 m12 l8 activityCard"},l.a.createElement("div",{className:"card z-depth-5"},l.a.createElement("div",{className:"card-image"}),l.a.createElement("p",{className:"card-title green-text text-accent-3 center-align"},"What did I do today?"),l.a.createElement("p",{className:"center-align"},"Select a category, then activity.",l.a.createElement("br",null),"Enter amount of time (in minutes) doing activity, then enter date.",l.a.createElement("br",null),"Points will be calculated when time is entered."),l.a.createElement("div",{className:"card-content"},l.a.createElement("select",{name:"category",id:"category",onChange:function(e){var a=e.target.value;console.log(a),f(a),A(r.filter((function(e){return console.log(e),e.category.toLowerCase()===a})))},value:g},l.a.createElement("option",{disabled:!0,value:"Choose an Category"}," ","Choose a Category"),["Automobile","Charity","Chores","Digital","Finances","Fitness/personal care","Health","Home Maintenance","Miscellaneous","Organization/Paperwork","Pet Care","Self Care","Social","Work"].map((function(e){return l.a.createElement("option",{key:"i - ".concat(e),value:e.toLowerCase()},e)}))),l.a.createElement("select",{name:"activities",id:"activities",value:N,onChange:function(e){return w(e.target.value)}},l.a.createElement("option",{value:"Choose an Activity",disabled:!0}," ","Choose an Activity"),j.map((function(e,a){return l.a.createElement("option",{key:"i - ".concat(e.activity).concat(a),value:e._id},e.activity)}))),l.a.createElement("input",{className:"col s12 m12 l5",ref:e,placeholder:"time (in minutes)",type:"number"}),l.a.createElement("div",{className:"col s12 m12 l2"}),l.a.createElement("input",{className:"col s12 m12 l5",ref:a,type:"date",id:"date",name:"date"}),l.a.createElement("button",{className:"btn waves-effect waves-#69f0ae green accent-2",type:"submit",name:"action",onClick:function(t){t.preventDefault(),console.log(e.current.value),console.log(a.current.value),m.a.post("api/log/",{log:[{activity:N,duration:parseInt(e.current.value),date:a.current.value}],userId:S._id}).then((function(e){C()}))}},"Submit",l.a.createElement("i",{className:"material-icons right"},"send")),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("h5",{className:"center-align"},"I'm getting so much done today!"),l.a.createElement("div",{className:"col s6 m9 l9 todayActivities"},l.a.createElement("input",{placeholder:"ACTIVITY"})),l.a.createElement("div",{className:"col s6 m3 l3 todayActivities"},l.a.createElement("input",{placeholder:"POINTS"})),l.a.createElement("div",{className:"row"},u.map((function(e,a){return console.log(e),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col s9",key:"iiiiiiiiii ".concat(a)},e.log.activity[0].activity),l.a.createElement("div",{className:"col s3"},e.log.duration*e.log.activity[0].level))}))))))))}t(57);var E=t(9),v=t.n(E),g=t(11),f=t.n(g),h=t(12),b=t.n(h),N=t(15),w=t.n(N),y=t(16),O=t.n(y);var j=function(){return l.a.createElement("div",{className:"col s12 m12 l4 awardCard"},l.a.createElement("div",{className:"card z-depth-5"},l.a.createElement("div",{className:"card-content"},l.a.createElement("span",{className:"card-title"},"Awards"),l.a.createElement("p",null,"Earn points by acting like an adult to get these awards!"),l.a.createElement("img",{src:v.a,alt:"bronze star",className:"allAwards"}),l.a.createElement("img",{src:f.a,alt:"silver star",className:"allAwards"}),l.a.createElement("img",{src:b.a,alt:"gold star",className:"allAwards"}),l.a.createElement("img",{src:w.a,alt:"bronzeSilver star",className:"allAwards"}),l.a.createElement("img",{src:O.a,alt:"bronzeGold star",className:"allAwards"}),l.a.createElement("span",{className:"card-title"},"This is your",l.a.createElement("br",null)," current level"),l.a.createElement("div",null,l.a.createElement("img",{src:b.a,alt:"gold star",className:"materialboxed"}),l.a.createElement("p",null,"Congratulations! You've earned the Gold Star!")),l.a.createElement("span",{className:"card-title"},"Status"),l.a.createElement("p",null,"Points earned: ",300),l.a.createElement("br",null),l.a.createElement("p",null,"You are ",100," points away from your next award!"),l.a.createElement("br",null),l.a.createElement("p",null,"Awards earned:"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",null," ",l.a.createElement("img",{src:v.a,alt:"bronze star",className:"allAwards"})," ",l.a.createElement("img",{src:f.a,alt:"silver star",className:"allAwards"}),l.a.createElement("img",{src:b.a,alt:"gold star",className:"allAwards"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",{className:"card-title"},"Keep Adulting!",l.a.createElement("br",null),"You are doing great!"))))};t(58);var A=function e(a){var t=Object(n.useState)(),c=Object(d.a)(t,2),r=(c[0],c[1]);return Object(n.useEffect)((function(){m.a.request({method:"GET",url:"https://dad-jokes.p.rapidapi.com/random/joke/png",headers:{"x-rapidapi-key":"e8033ca9a0msh25b010323f351bfp10467ejsn0155295ca703","x-rapidapi-host":"dad-jokes.p.rapidapi.com"}}).then((function(a){console.log(a.data),r(a.data.body.setup.punchline),console.log(e)})).catch((function(e){console.error(e)}))}),[]),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col s12 m12 l12"},l.a.createElement("div",{class:"card #69f0ae green accent-2"},l.a.createElement("div",{class:"card-content white-text"},l.a.createElement("span",{class:"card-title"},"Bad Joke of the Day"),l.a.createElement("p",null,"Have joke show up here")))))};var S=function(){return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement("main",{className:"main-container",id:"home"},l.a.createElement("div",{className:"row"},l.a.createElement(p,null),l.a.createElement(j,null),l.a.createElement(A,null))))},C=(t(59),t(29)),x=t.n(C);var k=function(e){var a=Object(n.useState)(""),t=Object(d.a)(a,2),c=t[0],r=t[1],s=Object(n.useState)(""),o=Object(d.a)(s,2),u=o[0],p=o[1],E=Object(n.useState)(""),v=Object(d.a)(E,2),g=v[0],f=v[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"row center-align "},l.a.createElement("div",{className:"col s6 pic"},l.a.createElement("img",{src:x.a,alt:"definition of adulting",className:"materialboxed",width:"325"})),l.a.createElement("div",{className:"col s6 center"},l.a.createElement("div",{className:"input-field "},l.a.createElement("i",{className:"material-icons prefix"},"account_circle"),l.a.createElement("input",{name:"email",placeholder:"Email",onChange:function(e){return r(e.target.value)},id:"icon_prefix",type:"text",className:"validate"})),l.a.createElement("div",{className:"input-field "},l.a.createElement("i",{className:"material-icons prefix"},"account_circle"),l.a.createElement("input",{name:"email",placeholder:"Username",onChange:function(e){return f(e.target.value)},id:"icon_prefix",type:"text",className:"validate"})),l.a.createElement("div",{className:"input-field "},l.a.createElement("i",{className:"material-icons prefix"},"security"),l.a.createElement("input",{name:"password",placeholder:"Password",onChange:function(e){return p(e.target.value)},id:"icon_prefix",type:"text",className:"validate"})),l.a.createElement("button",{className:"submit",onClick:function(e){e.preventDefault(),console.log(c,u,g),m.a.post("api/user/login",{email:c,password:u,username:g},{withCredentials:!0}).then((function(e){console.log(e),localStorage.user=JSON.stringify(e.data.user),window.location.replace("/home")})).catch((function(e){console.log("login error",e)}))}},"Submit"," ")),l.a.createElement("div",null,l.a.createElement(i.b,{className:"submit",to:"/signup"},"Create an Account"))))},I=(t(65),t(31)),T=t.n(I);var D=function(e){var a=Object(n.useState)(""),t=Object(d.a)(a,2),c=t[0],r=t[1],i=Object(n.useState)(""),s=Object(d.a)(i,2),o=s[0],u=s[1],p=Object(n.useState)(""),E=Object(d.a)(p,2),v=E[0],g=E[1],f=Object(n.useState)(""),h=Object(d.a)(f,2),b=h[0],N=h[1],w=Object(n.useState)(""),y=Object(d.a)(w,2),O=y[0],j=y[1];return l.a.createElement("div",{className:"center-align phils-house"},l.a.createElement("div",{className:"col s6"},l.a.createElement("img",{src:T.a,alt:"adulting status bar",className:"materialboxed col s6 m6 l6",width:"325"})),l.a.createElement("div",{className:"col s6 phils-form"},l.a.createElement("div",{className:"input-field "},l.a.createElement("input",{name:"newFirstName",onChange:function(e){return r(e.target.value)},placeholder:"First Name",id:"first_name",type:"text",className:"validate"}),l.a.createElement("label",{for:"first_name"}),l.a.createElement("input",{name:"newLastName",onChange:function(e){return u(e.target.value)},placeholder:"Last Name",id:"last_name",type:"text",className:"validate"}),l.a.createElement("label",{for:"last_name"}),l.a.createElement("input",{name:"nickname",onChange:function(e){return g(e.target.value)},placeholder:"Username",id:"nickname",type:"text",className:"validate"}),l.a.createElement("label",{for:"nickname"}),l.a.createElement("input",{name:"email",onChange:function(e){return N(e.target.value)},placeholder:"Email",id:"email",type:"text",className:"validate"}),l.a.createElement("label",{for:"email"}),l.a.createElement("input",{name:"password",onChange:function(e){return j(e.target.value)},placeholder:"Password",id:"password",type:"text",className:"validate"}),l.a.createElement("label",{for:"password"})),l.a.createElement("button",{className:"submit",onClick:function(e){e.preventDefault(),m.a.post("/api/user",{email:b,password:O,name:"".concat(c," ").concat(o),username:v}).then((function(e){console.log(e),window.location="/home"})).catch((function(e){console.log("user not added",e)}))}},"Start Adulting Today!")))},_=(t(66),t(32)),z=t.n(_);var L=function(){var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){m.a.get("/api/activities").then((function(e){console.log(e),c(e.data)}))}),[]),l.a.createElement("div",{id:"AllActivities"},l.a.createElement(u,null),l.a.createElement("h1",null,"Adulting:"),l.a.createElement("h2",null,"Harder than we all thought.",l.a.createElement("br",null),"Am I right?"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m2 l2 hide-on-small-only rowHeading"},l.a.createElement("input",{placeholder:"DATE"})),l.a.createElement("div",{className:"col s12 m3 l3 hide-on-small-only rowHeading"},l.a.createElement("input",{placeholder:"CATEGORY"})),l.a.createElement("div",{className:"col s12 m4 l4 hide-on-small-only rowHeading"},l.a.createElement("input",{placeholder:"ACTIVITY"})),l.a.createElement("div",{className:"col s12 m2 l2 hide-on-small-only rowHeading"},l.a.createElement("input",{placeholder:"POINTS"}))),l.a.createElement("div",{className:"row"},t.map((function(e){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m2 l2 allActivities"},(e.date,z()().format("MM/DD/YYYY"))),l.a.createElement("div",{className:"col s12 m3 l3 allActivities"},e.category),l.a.createElement("div",{className:"col s12 m4 l4 allActivities"},e.activity),l.a.createElement("div",{className:"col s12 m2 l2 allActivities"},e.points))}))))};t(67);var Y=function(){return l.a.createElement(i.a,null,l.a.createElement("div",{className:"container"},l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/login",component:k}),l.a.createElement(s.a,{exact:!0,path:"/signup",component:D}),l.a.createElement(s.a,{exact:!0,path:"/",component:k}),l.a.createElement(s.a,{exact:!0,path:"/home",component:S}),l.a.createElement(s.a,{exact:!0,path:"/allactivities",component:L}))))};r.a.render(l.a.createElement(Y,null),document.getElementById("root"))},9:function(e,a,t){e.exports=t.p+"static/media/bronzeStar.9130b7f4.png"}},[[33,1,2]]]);
//# sourceMappingURL=main.99a8d184.chunk.js.map