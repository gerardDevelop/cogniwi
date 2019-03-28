(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},27:function(e,t,n){e.exports=n(49)},34:function(e,t,n){},37:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},49:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(13),s=n.n(r),l=(n(32),n(34),n(3)),c=n(4),i=n(6),u=n(5),m=n(7),h=(n(18),n(37),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("component did mount.")}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("a",{className:"App-link",href:"/survey?token=303d1eb2-ddb8-486c-a823-02af2365beb6",target:"_blank",rel:"noopener noreferrer"},"View survey (for customer)"),o.a.createElement("a",{className:"App-link",href:"/survey2?token=303d1eb2-ddb8-486c-a823-02af2365beb6",target:"_blank",rel:"noopener noreferrer"},"View survey 2 (for customer)"),o.a.createElement("a",{className:"App-link",href:"/testLayout",target:"_blank",rel:"noopener noreferrer"},"View testlayout")))}}]),t}(a.Component)),d=(a.Component,a.Component,n(19),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={surveyId:null,questions:[],answers:[],stockNo:null,companyId:null,token:null,completed:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onTextFieldChange",value:function(e,t){var n=this.state.answers;n[t-1].answer=e.target.value,this.setState({answers:n}),console.log("on text field change")}},{key:"onInputClick",value:function(e,t,n){console.log("value = "+t+" is "+e);var a=this.state.answers;a[t-1].answer=e,this.setState({answers:a})}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("on submit"),console.log(this.state.answers),this.sendAnswers()}},{key:"componentDidMount",value:function(){this.getSurvey()}},{key:"getSurvey",value:function(){var e=this,t=new URLSearchParams(this.props.location.search).get("token");console.log("token: "+t),t?(this.setState({token:t}),console.log("getting survey"),fetch("/api/tokenSurvey?token="+t).then(function(e){return e.json()}).then(function(t){if(console.log(t),t&&!t.completed){console.log("received survey");var n=1,a=[],o=t.questions.map(function(e){return e.key=n,a[n-1]={answer:null},console.log("setting key for "+n),n++,e});e.setState({questions:o,answers:a})}else t.completed?(console.log("Survey has already been completed"),e.setState({completed:!0})):console.log("didn't receive survey")}).catch(function(e){return console.log(e)})):console.log("no id given")}},{key:"sendAnswers",value:function(){console.log("sending answers"),fetch("/api/tokenSurvey",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},referrer:"no-referrer",body:JSON.stringify({token:this.state.token,answers:this.state.answers})}).then(function(e){return e.json()}).then(function(e){return console.log("received resp "+e.msg)})}},{key:"getQuestionJSX",value:function(e){var t=this;return"bool"===e.type?o.a.createElement("div",{className:"form-check",key:e.key},o.a.createElement("label",null,e.question),o.a.createElement("br",null),o.a.createElement("input",{className:"form-check-input",name:"radio"+e.key,id:"radioyes"+e.key,type:"radio",onClick:function(n){return t.onInputClick(!0,e.key,n)}}),o.a.createElement("label",{className:"form-check-label",htmlFor:"radioyes"+e.key},"Yes")," ",o.a.createElement("br",null),o.a.createElement("input",{className:"form-check-input",name:"radio"+e.key,id:"radiono"+e.key,type:"radio",onClick:function(n){return t.onInputClick(!1,e.key,n)}}),o.a.createElement("label",{className:"form-check-label",htmlFor:"radiono"+e.key},"No"),o.a.createElement("p",null)):"text"===e.type?o.a.createElement("div",{className:"form-group",key:e.key},o.a.createElement("label",null,e.question),o.a.createElement("br",null),o.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"4",onChange:function(n){t.onTextFieldChange(n,e.key)}}),o.a.createElement("p",null)):null}},{key:"render",value:function(){var e=this;this.getQuestionJSX.bind(this);return this.state.completed?o.a.createElement("div",{className:"container"},o.a.createElement("p",null,"Survey already completed")):o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"card mt-3 mb-4"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h2",null,"Survey for Toyota Corolla 2018"))),o.a.createElement("form",null,this.state.questions.map(function(t){return e.getQuestionJSX(t)}),o.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(t){return e.onSubmit(t)}},"Submit")))}}]),t}(a.Component)),p=n(55),v=n(54),y=n(52),f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={surveyId:null,questions:[],answers:[],stockNo:null,companyId:null,token:null,currentIncr:0,vehicleName:"",error:!1,errorMsg:"",showQuestion:!0},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"onTextFieldChange",value:function(e){var t=this.state.answers;t[this.state.currentIncr].answer=e.target.value,this.setState({answers:t}),console.log("on text field change")}},{key:"onInputClick",value:function(e,t){console.log("value = "+this.state.currentIncr+" is "+e);var n=this.state.answers;n[this.state.currentIncr].answer=e;var a=this.state.currentIncr;a<this.state.questions.length-1&&(a+=1),this.setState({answers:n,currentIncr:a,showQuestion:!1})}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("on submit"),console.log(this.state.answers),this.sendAnswers()}},{key:"componentDidMount",value:function(){this.getSurvey()}},{key:"componentDidUpdate",value:function(){this.state.showQuestion||this.setState({showQuestion:!0})}},{key:"getSurvey",value:function(){var e=this,t=new URLSearchParams(this.props.location.search).get("token");console.log("token: "+t),t?(this.setState({token:t}),console.log("getting survey"),fetch("/api/tokenSurvey?token="+t).then(function(e){return e.json()}).then(function(t){if(console.log(t),t&&!t.completed){console.log("received survey");var n=1,a=[],o=t.questions.map(function(e){return e.key=n,a[n-1]={answer:null},console.log("setting key for "+n),n++,e});e.setState({questions:o,answers:a,vehicleName:" for "+t.vehicle.make})}else t.completed?(console.log("Survey has already been completed"),e.setState({error:!0,errorMsg:"Error: Survey has already been completed"})):console.log("didn't receive survey")}).catch(function(t){e.setState({error:!0,errorMsg:"Error: Could not find survey"}),console.log(t)})):console.log("no id given")}},{key:"sendAnswers",value:function(){console.log("sending answers"),fetch("/api/tokenSurvey",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},referrer:"no-referrer",body:JSON.stringify({token:this.state.token,answers:this.state.answers})}).then(function(e){return e.json()}).then(function(e){console.log("received resp "+e.msg)})}},{key:"render",value:function(){var e=this,t=(o.a.createElement("div",{className:"card mt-3 mb-4"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h2",null,"Survey for Toyota Corolla 2018"))),o.a.createElement("button",null,"Start Survey?"),o.a.createElement(o.a.Fragment,null),o.a.createElement(o.a.Fragment,null)),n=o.a.createElement(o.a.Fragment,null);if(!this.state.error&&this.state.questions.length>0&&(n=null,"bool"===(t=this.state.questions[this.state.currentIncr]).type?n=o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{color:"secondary",size:"lg",onClick:function(t){return e.onInputClick(!1,t)}},"No")," ",o.a.createElement(p.a,{color:"primary",size:"lg",onClick:function(t){return e.onInputClick(!0,t)}},"Yes")):"text"===t.type&&(n=o.a.createElement("div",null,o.a.createElement("div",{className:"d-flex justify-content-center mt-3"},o.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"4",onChange:function(t){e.onTextFieldChange(t)}})),o.a.createElement("p",null),o.a.createElement("div",{className:"d-flex justify-content-center mt-3"},o.a.createElement(p.a,{color:"primary",size:"lg",onClick:function(t){return e.onSubmit(t)},className:"mt-2"},"Submit")))),o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,t.question),n)),this.state.error)return o.a.createElement("div",{className:"container"},o.a.createElement(v.a,{color:"danger",className:"mt-5"},this.state.errorMsg));var a=o.a.createElement(o.a.Fragment,null);return this.state.showQuestion&&(a=o.a.createElement(v.a,{color:"primary",className:"mt-3"},t.question)),o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,o.a.createElement(y.a,{color:"secondary",className:"mt-3"},"Survey",this.state.vehicleName)),a,o.a.createElement("div",{className:"centered"},n))}}]),t}(a.Component),g=(a.Component,function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("p",null,"Content here"))}}]),t}(a.Component)),k=n(56),b=n(57),E=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){o.a.createElement("div",null);return o.a.createElement(k.a,null,o.a.createElement(b.a,{exact:!0,path:"/",component:h}),o.a.createElement(b.a,{exact:!0,path:"/survey",component:d}),o.a.createElement(b.a,{exact:!0,path:"/survey2",component:f}),o.a.createElement(b.a,{exact:!0,path:"/testlayout",component:g}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=n(53);s.a.render(o.a.createElement(w.a,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.abdba3bb.chunk.js.map