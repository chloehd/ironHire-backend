(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(61)},32:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),i=(a(32),a(2)),o=a(3),s=a(5),u=a(4),m=a(6),d=a(66),h=a(62),p=a(63),g=a(7),E=a.n(g),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"homepage"},r.a.createElement("div",{id:"index-banner",className:"parallax-container"},r.a.createElement("div",{className:"section no-pad-bot"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"header center teal-text text-lighten-2"},"Parallax Template"),r.a.createElement("div",{className:"row center"},r.a.createElement("h5",{className:"header col s12 light"},"A modern responsive front-end framework based on Material Design")),r.a.createElement("div",{className:"row center"},r.a.createElement("a",{href:"http://materializecss.com/getting-started.html",id:"download-button",className:"btn-large waves-effect waves-light teal lighten-1"},"Get Started")))),r.a.createElement("div",{className:"parallax"},r.a.createElement("img",{src:"background1.jpg",alt:"Unsplashed background img 1"}))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m4"},r.a.createElement("div",{className:"icon-block"},r.a.createElement("h2",{className:"center brown-text"},r.a.createElement("i",{className:"material-icons"},"flash_on")),r.a.createElement("h5",{className:"center"},"Candidates"),r.a.createElement("p",{className:"light"},"We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers."))),r.a.createElement("div",{className:"col s12 m4"},r.a.createElement("div",{className:"icon-block"},r.a.createElement("h2",{className:"center brown-text"},r.a.createElement("i",{className:"material-icons"},"group")),r.a.createElement("h5",{className:"center"},"Recruiter"),r.a.createElement("p",{className:"light"},"By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience."))),r.a.createElement("div",{className:"col s12 m4"},r.a.createElement("div",{className:"icon-block"},r.a.createElement("h2",{className:"center brown-text"},r.a.createElement("i",{className:"material-icons"},"settings")),r.a.createElement("h5",{className:"center"},"Associations"),r.a.createElement("p",{className:"light"},"We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.")))))),r.a.createElement("div",{className:"parallax-container valign-wrapper"},r.a.createElement("div",{className:"section no-pad-bot"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row center"},r.a.createElement("h5",{className:"header col s12 light"},"A modern responsive front-end framework based on Material Design")))),r.a.createElement("div",{className:"parallax"},r.a.createElement("img",{src:"background2.jpg",alt:"Unsplashed background img 2"}))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center"},r.a.createElement("h3",null,r.a.createElement("i",{className:"mdi-content-send brown-text"})),r.a.createElement("h4",null,"About Us"),r.a.createElement("p",{className:"left-align light"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;"))))),r.a.createElement("div",{className:"parallax-container valign-wrapper"},r.a.createElement("div",{className:"section no-pad-bot"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row center"},r.a.createElement("h5",{className:"header col s12 light"},"A modern responsive front-end framework based on Material Design")))),r.a.createElement("div",{className:"parallax"},r.a.createElement("img",{src:"background3.jpg",alt:"Unsplashed background img 3"}))))}}]),t}(n.Component),v=a(25),b=a(53),y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.newsArray;return r.a.createElement("section",{className:"NewsList"},r.a.createElement("ul",null,e.map(function(e){return r.a.createElement("div",{key:e._id,className:"NewsMap"},r.a.createElement("li",null,r.a.createElement("h5",null,e.owner.name),r.a.createElement("p",null,e.createdAt),r.a.createElement("p",null,e.message),e.image&&r.a.createElement("img",{className:"ImgNewsMap",src:e.image,alt:""}),e.Link&&r.a.createElement(b.a,{to:e.link},"Click me")))})))}}]),t}(n.Component),S=a(9),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={message:"",image:"",link:"",isSubmitSuccessful:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(S.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),E.a.post("/api/association",{message:this.state.message,image:this.state.image,link:this.state.link},{withCredentials:!0}).then(function(e){console.log("Add News",e.data),t.props.updateNewsArray(e.data)}).catch(function(e){console.log("Add News ERROR",e),alert("Sorry! Something went wrong. AddNews48")})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"AddNews"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null,"Message:",r.a.createElement("input",{value:this.state.message,onChange:function(t){return e.genericSync(t)},type:"text",name:"message",placeholder:"Today, we've met... "})),r.a.createElement("label",null,"Image:",r.a.createElement("input",{value:this.state.image,onChange:function(t){return e.genericSync(t)},type:"url",name:"image",placeholder:"www.image.com/img.jpg"})),r.a.createElement("label",null,"Link:",r.a.createElement("input",{value:this.state.link,onChange:function(t){return e.genericSync(t)},type:"url",name:"link",placeholder:"www.example.com"})),r.a.createElement("button",null,"Add News")))}}]),t}(n.Component),O=a(65),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={email:"",originalPassword:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(S.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),E.a.post("/api/login",this.state,{withCredentials:!0}).then(function(e){console.log("Login Page",e.data);var a=e.data.userDoc;t.props.onUserChange(a)}).catch(function(e){console.log("Login Page ERROR.",e),alert("Sorry! Something went wrong. Login35")})}},{key:"getUrl",value:function(e){return"/".concat(e)}},{key:"render",value:function(){var e=this;return this.props.currentUser?r.a.createElement(O.a,{to:this.getUrl(this.props.currentUser.role)}):r.a.createElement("section",{className:"Login"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null,"Email:",r.a.createElement("input",{value:this.state.email,onChange:function(t){return e.genericSync(t)},type:"email",name:"email",placeholder:"john@email.com"})),r.a.createElement("label",null,"Password:",r.a.createElement("input",{value:this.state.originalPassword,onChange:function(t){return e.genericSync(t)},type:"password",name:"originalPassword",placeholder:"****"})),r.a.createElement("button",null,"Log In!")))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={newsArray:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/api/association",{withCredentials:!0}).then(function(t){console.log("News List",t.data),e.setState({newsArray:t.data})}).catch(function(e){console.log("News List ERROR",e),alert("Sorry! Something went wrong. NewsP30")})}},{key:"updateNewsArray",value:function(e){var t=Object(v.a)(this.state.newsArray);t.unshift(e),this.setState({newsArray:t})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"associations"},!this.props.currentUser&&r.a.createElement("div",null,r.a.createElement("p",null,"You are an association that is working with refugees. You help them to be integrated in their new place and helping them to find a job is one of your aim. You can join the community of IronHire to be in contact with other associations that are following the same way."),r.a.createElement(C,{onUserChange:this.props.onUserChange})),this.props.currentUser&&r.a.createElement("div",null,r.a.createElement(w,{updateNewsArray:function(t){return e.updateNewsArray(t)}}),r.a.createElement(y,{newsArray:this.state.newsArray})))}}]),t}(n.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"notfound"})}}]),t}(n.Component);function k(e){return"/recruiter/allcandidates/".concat(e._id)}var U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={candidateArray:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/api/recruiter",{withCredentials:!0}).then(function(t){console.log("Candidates",t.data),e.setState({candidateArray:t.data})}).catch(function(e){console.log("candidates ERROR \ud83e\udd84",e),alert("Sorry! Candidate data not loading")})}},{key:"render",value:function(){var e=this.state.candidateArray;console.log(e);var t=e.map(function(e){return r.a.createElement("div",{className:"AllCandidatesDiv",key:e._id},r.a.createElement("div",null,r.a.createElement(b.a,{to:k(e)},r.a.createElement("img",{src:e.candidate_pic,alt:""}))),r.a.createElement("div",{className:"candidatesInfo"},r.a.createElement("h5",null,e.first_name," ",e.last_name),e.email,e.employment_status,e.languages,e.skills))});return r.a.createElement("section",{className:"AllCandidatesSection"},t)}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={allCandidatesArray:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.props.currentUser&&this.getCandidates()}},{key:"componentDidUpdate",value:function(e){!e.currentUser&&this.props.currentUser&&this.getCandidates()}},{key:"getCandidates",value:function(){var e=this;E.a.get("/api/recruiter").then(function(t){console.log("Get Candidates",t.data),e.setState({allCandidatesArray:t.data})}).catch(function(e){console.log("Get Candidates ERROR",e),alert("Sorry! Something went wrong. ADDASSOProfile34")})}},{key:"render",value:function(){return r.a.createElement("section",{className:"AllCandidatesSection"},!this.props.currentUser&&r.a.createElement("div",null,r.a.createElement("p",null,"Dear Recruiters, you are looking for employees and you are sure that integrating people that are in difficulties is a good thing, you are in the right place. You can add job offers here and see candidate profiles. Sign up to experiment the website."),r.a.createElement(C,{onUserChange:this.props.onUserChange})),this.props.currentUser&&r.a.createElement("div",null,r.a.createElement("a",{href:"/recruiter"},"All candidates"),r.a.createElement("a",{href:"/recruiter/add-job"},"Add a job"),r.a.createElement("h2",null,"Welcome, recruiters!"),r.a.createElement(U,{allCandidatesArray:this.state.allCandidatesArray})))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={name:"",createdOn:"",description:"",email:"",originalPassword:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(S.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),E.a.post("/api/association/signup",this.state,{withCredentials:!0}).then(function(e){console.log("Login Page",e.data);var a=e.data.userDoc;t.props.onUserChange(a)}).catch(function(e){console.log("Login Page ERROR.",e),alert("Sorry! Something went wrong.")})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"signup"},r.a.createElement("form",{onSubmit:function(t){e.handleSubmit(t)}},r.a.createElement("label",null,"Name of the association:",r.a.createElement("input",{value:this.state.name,onChange:function(t){return e.genericSync(t)},type:"text",name:"name",placeholder:"SuperOrganisation..."})),r.a.createElement("label",null,"Date of creation:",r.a.createElement("input",{value:this.state.createdOn,onChange:function(t){return e.genericSync(t)},type:"date",name:"createdOn"})),r.a.createElement("label",null,"What are the actions of your association linked with this website?",r.a.createElement("input",{value:this.state.description,onChange:function(t){return e.genericSync(t)},type:"text",name:"description",placeholder:"In our association, we help refugees to find a job..."})),r.a.createElement("label",null,"Email:",r.a.createElement("input",{value:this.state.email,onChange:function(t){return e.genericSync(t)},type:"email",name:"email",placeholder:"john@email.com"})),r.a.createElement("label",null,"Password:",r.a.createElement("input",{value:this.state.originalPassword,onChange:function(t){return e.genericSync(t)},type:"password",name:"originalPassword",placeholder:"****"})),r.a.createElement("button",null,"Sign Up!")))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={companyName:"",email:"",originalPassword:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(S.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),E.a.post("/api/recruiter/signup",this.state,{withCredentials:!0}).then(function(e){console.log("Signup Page",e.data);var a=e.data.userDoc;t.props.onUserChange(a)}).catch(function(e){console.log("Signup ERROR.",e),alert("Sorry! Something went wrong. RECRUIT35")})}},{key:"getUrl",value:function(e){return"/".concat(e)}},{key:"render",value:function(){var e=this;return this.props.currentUser?r.a.createElement(O.a,{to:this.getUrl(this.props.currentUser.role)}):r.a.createElement("section",{className:"signup"},r.a.createElement("form",{onSubmit:function(t){e.handleSubmit(t)}},r.a.createElement("label",null,"Name of the company:",r.a.createElement("input",{value:this.state.companyName,onChange:function(t){return e.genericSync(t)},type:"text",name:"companyName",placeholder:"SuperCompany..."})),r.a.createElement("label",null,"Email:",r.a.createElement("input",{value:this.state.email,onChange:function(t){return e.genericSync(t)},type:"email",name:"email",placeholder:"john@email.com"})),r.a.createElement("label",null,"Password:",r.a.createElement("input",{value:this.state.originalPassword,onChange:function(t){return e.genericSync(t)},type:"password",name:"originalPassword",placeholder:"****"})),r.a.createElement("button",null,"Sign Up!")))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={first_name:"",last_name:"",email:"",originalPassword:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(S.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),E.a.post("/api/candidate/signup",this.state,{withCredentials:!0}).then(function(e){console.log("Login Page",e.data);var a=e.data.userDoc;t.props.onUserChange(a)}).catch(function(e){console.log("Login Page ERROR.",e),alert("Sorry! Something went wrong. CANDIDATE36")})}},{key:"render",value:function(){var e=this;return this.props.currentUser?r.a.createElement(O.a,{to:"/candidate"}):r.a.createElement("section",{className:"signup"},r.a.createElement("form",{onSubmit:function(t){e.handleSubmit(t)}},r.a.createElement("label",null,"First Name:",r.a.createElement("input",{value:this.state.first_name,onChange:function(t){return e.genericSync(t)},type:"text",name:"first_name",placeholder:"John"})),r.a.createElement("label",null,"Last Name:",r.a.createElement("input",{value:this.state.last_name,onChange:function(t){return e.genericSync(t)},type:"text",name:"last_name",placeholder:"Smith"})),r.a.createElement("label",null,"Email:",r.a.createElement("input",{value:this.state.email,onChange:function(t){return e.genericSync(t)},type:"email",name:"email",placeholder:"john@email.com"})),r.a.createElement("label",null,"Password:",r.a.createElement("input",{value:this.state.originalPassword,onChange:function(t){return e.genericSync(t)},type:"password",name:"originalPassword",placeholder:"****"})),r.a.createElement("button",null,"Sign Up!")))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={name:"",salary:"",educationLevel:"",description:"",contractType:"",location:"",createdAt:"",deadline:"",owner:"recruiter",isSubmitSuccessful:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(S.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),E.a.post("/api/recruiter/add-job",{name:this.state.name,salary:this.state.salary,educationLevel:this.state.educationLevel,description:this.state.description,contractType:this.state.contractType,location:this.state.location,createdAt:this.state.createdAt,deadline:this.state.deadline,owner:this.state.owner.name},{withCredentials:!0}).then(function(e){console.log("Add Job",e.data),t.setState({isSubmitSuccessful:!0})}).catch(function(e){console.log("Add Job ERROR",e),alert("Sorry! Something went wrong. AddJob52")})}},{key:"render",value:function(){var e=this;return this.state.isSubmitSuccessful?r.a.createElement(O.a,{to:"/recruiter/add-job"}):r.a.createElement("section",{className:"AddJob"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null,"Job's name:",r.a.createElement("input",{value:this.state.name,onChange:function(t){return e.genericSync(t)},type:"text",name:"name",placeholder:"Communication officer"})),r.a.createElement("label",null,"Salary:",r.a.createElement("input",{value:this.state.salary,onChange:function(t){return e.genericSync(t)},type:"number",name:"salary",placeholder:"30K"})),r.a.createElement("label",null,"Education Level:",r.a.createElement("input",{value:this.state.educationLevel,onChange:function(t){return e.genericSync(t)},type:"text",name:"educationLevel",placeholder:"Bachelor required"})),r.a.createElement("label",null,"Description:",r.a.createElement("input",{value:this.state.description,onChange:function(t){return e.genericSync(t)},type:"text",name:"description",placeholder:"As a communication officer, you will have to..."})),r.a.createElement("label",null,"Contract Type:",r.a.createElement("input",{value:this.state.contractType,onChange:function(t){return e.genericSync(t)},type:"text",name:"contractType",placeholder:"6 months contract"})),r.a.createElement("label",null,"Location:",r.a.createElement("input",{value:this.state.location,onChange:function(t){return e.genericSync(t)},type:"text",name:"location",placeholder:"London"})),r.a.createElement("label",null,"Deadline:",r.a.createElement("input",{value:this.state.deadline,onChange:function(t){return e.genericSync(t)},type:"date",name:"deadline",placeholder:"London"})),r.a.createElement("button",null,"Add a job offer")))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={candidate_pic:"",first_name:"",last_name:"",email:"",telephone_number:"",employment_status:"searching",experience:[{}],education:[{}],languages:[""],add_achievements:"",skills:"",role:"candidate"},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(S.a)({},a,n))}},{key:"handleFormSubmit",value:function(e){var t=this;e.preventDefault(),E.a.put("/api/candidate",this.state,{withCredentials:!0}).then(function(e){console.log("Add CV",e.data),t.setState({isSubmitSuccessful:!0})}).catch(function(e){console.log("Add CV ERROR",e),alert("Sorry! Something went wrong. AddJob52")})}},{key:"syncExp",value:function(e,t){var a=this.state.experience,n=e.target,r=n.name,l=n.value;a[t][r]=l,this.setState({experience:a})}},{key:"syncEdu",value:function(e,t){var a=this.state.education,n=e.target,r=n.name,l=n.value;a[t][r]=l,this.setState({education:a})}},{key:"render",value:function(){var e=this;if(this.state.isSubmitSuccessful)return r.a.createElement(O.a,{to:"/candidate"});var t=this.state,a=t.first_name,n=t.last_name,l=t.candidate_pic,c=t.email,i=t.telephone_number,o=t.experience,s=t.education,u=t.skills,m=t.languages,d=t.add_achievements,h=t.employment_status;return r.a.createElement("section",{className:"AddCv"},r.a.createElement("form",{onSubmit:function(t){return e.handleFormSubmit(t)}},r.a.createElement("label",null,"First Name:",r.a.createElement("input",{value:a,onChange:function(t){return e.genericSync(t)},type:"text",name:"first_name",placeholder:"Jon"})),r.a.createElement("label",null,"Last Name:",r.a.createElement("input",{value:n,onChange:function(t){return e.genericSync(t)},type:"text",name:"last_name",placeholder:"Snow"})),r.a.createElement("label",null,"Picture:",r.a.createElement("input",{value:l,onChange:function(t){return e.genericSync(t)},type:"url",name:"candidate_pic",placeholder:"www.example.com/img.jpg"})),r.a.createElement("label",null,"Email address:",r.a.createElement("input",{value:c,onChange:function(t){return e.genericSync(t)},type:"email",name:"email",placeholder:"jon.snow@stark.com"})),r.a.createElement("label",null,"Telephone Number:",r.a.createElement("input",{value:i,onChange:function(t){return e.genericSync(t)},type:"number",name:"telephone_number",placeholder:"07 28 63 86 20"})),r.a.createElement("div",null,r.a.createElement("h4",null,"Experience:"),o.map(function(t,a){return r.a.createElement("div",{key:a},r.a.createElement("label",null,"Company:",r.a.createElement("input",{type:"text",value:t.companyName,name:"companyName",onChange:function(t){return e.syncExp(t,a)}})),r.a.createElement("label",null,"Duration (months):",r.a.createElement("input",{type:"text",value:t.duration,name:"duration",onChange:function(t){return e.syncExp(t,a)}})),r.a.createElement("label",null,"Tasks:",r.a.createElement("input",{type:"text",value:t.tasks,name:"tasks",onChange:function(t){return e.syncExp(t,a)}})))})),r.a.createElement("div",null,r.a.createElement("h4",null,"Education:"),s.map(function(t,a){return r.a.createElement("div",{key:a},r.a.createElement("label",null,"Subject:",r.a.createElement("input",{key:a,type:"text",value:t.studyName,name:"studyName",onChange:function(t){return e.syncEdu(t,a)}})),r.a.createElement("label",null,"Institution:",r.a.createElement("input",{key:a,type:"text",value:t.schoolName,name:"schoolName",onChange:function(t){return e.syncEdu(t,a)}})),r.a.createElement("label",null,"Dates:",r.a.createElement("input",{key:a,type:"text",value:t.duration,name:"duration",onChange:function(t){return e.syncEdu(t,a)}})))})),r.a.createElement("label",null,"Skills:",r.a.createElement("input",{value:u,onChange:function(t){return e.genericSync(t)},type:"text",name:"skills",placeholder:"communication, management..."})),r.a.createElement("label",null,"Spoken languages:",r.a.createElement("input",{value:m,onChange:function(t){return e.genericSync(t)},type:"text",name:"languages",placeholder:"French, English, ..."})),r.a.createElement("label",null,"Additional achievements:",r.a.createElement("input",{value:d,onChange:function(t){return e.genericSync(t)},type:"text",name:"add_achievements",placeholder:"Driving licence... "})),r.a.createElement("label",null,"Employment status:",r.a.createElement("select",{name:"employment_status",value:h,onChange:function(t){return e.genericSync(t)}},r.a.createElement("option",{value:"searching"},"Searching"),r.a.createElement("option",{value:"open to offers"},"Open to Offers"),r.a.createElement("option",{value:"employed"},"Employed"))),r.a.createElement("button",null,"Save this CV")))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={associationLogo:e.currentUser?e.currentUser.associationLogo:"",name:e.currentUser?e.currentUser.name:"",createdOn:e.currentUser?e.currentUser.createdOn:"",description:e.currentUser?e.currentUser.description:"",addInformation:e.currentUser?e.currentUser.addInformation:"",telNumber:e.currentUser?e.currentUser.telNumber:"",email:e.currentUser?e.currentUser.email:"",role:"association"},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e){!e.currentUser&&this.props.currentUser&&this.setState({name:this.props.currentUser.name,createdOn:this.props.currentUser.createdOn,description:this.props.currentUser.description,addInformation:this.props.currentUser.addInformation,telNumber:this.props.currentUser.telNumber,email:this.props.currentUser.email,associationLogo:this.props.currentUser.associationLogo})}},{key:"uploadImage",value:function(e){var t=this,a=e.target.files;console.log("File SELECTED",a[0]);var n=new FormData;n.append("fileSubmission",a[0]),E.a.post("/api/upload-file",n,{withCredentials:!0}).then(function(e){console.log("Upload image",e.data),t.setState({associationLogo:e.data.fileUrl})}).catch(function(e){console.log("Upload Image Error",e),alert("Sorry! Something went wrong. ADDASSOProfile34")})}},{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(S.a)({},a,n))}},{key:"handleFormSubmit",value:function(e){var t=this;e.preventDefault(),E.a.put("/api/association/change-profile",this.state,{withCredentials:!0}).then(function(e){console.log("Add Association",e.data),t.setState({isSubmitSuccessful:!0})}).catch(function(e){console.log("Add Association ERROR",e),alert("Sorry! Something went wrong.")})}},{key:"render",value:function(){var e=this,t=this.state,a=(t.associationLogo,t.name),n=t.createdOn,l=t.description,c=t.addInformation,i=t.telNumber,o=t.email;return this.state.isSubmitSuccessful?r.a.createElement(O.a,{to:"/association"}):r.a.createElement("section",{className:"AddAssoProfile"},r.a.createElement("form",{onSubmit:function(t){return e.handleFormSubmit(t)}},r.a.createElement("label",null,"Association's name:",r.a.createElement("input",{value:a,onChange:function(t){return e.genericSync(t)},type:"text",name:"name",placeholder:"WWF..."})),r.a.createElement("label",null,"Date of creation:",r.a.createElement("input",{value:n,onChange:function(t){return e.genericSync(t)},type:"date",name:"createdOn",placeholder:"2005"})),r.a.createElement("label",null,"Description of actions:",r.a.createElement("input",{value:l,onChange:function(t){return e.genericSync(t)},type:"text",name:"description",placeholder:"This association helps people to..."})),r.a.createElement("label",null,"Additional Information:",r.a.createElement("input",{value:c,onChange:function(t){return e.genericSync(t)},type:"text",name:"addInformation",placeholder:"We work closely to this association..."})),r.a.createElement("label",null,"Email:",r.a.createElement("input",{value:o,onChange:function(t){return e.genericSync(t)},type:"email",name:"email",placeholder:"association@asso.org"})),r.a.createElement("label",null,"Telephone Number:",r.a.createElement("input",{value:i,onChange:function(t){return e.genericSync(t)},type:"number",name:"telNumber",placeholder:"01 45 76 18 01"})),r.a.createElement("label",null,"Logo:",r.a.createElement("input",{type:"file",onChange:function(t){return e.uploadImage(t)}})),r.a.createElement("img",{src:this.state.associationLogo,alt:""}),r.a.createElement("button",null,"Update your profile")))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={specs:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;E.a.get(""+"/api/recruiter/allcandidates/".concat(t.id),{withCredentials:!0}).then(function(t){console.log("candidate deets",t.data),e.setState(t.data)}).catch(function(e){console.log("candidate deets error",e),alert("Oops! Something went wrong.")})}},{key:"render",value:function(){var e=this.state,t=e.candidate_pic,a=e.first_name,n=e.last_name,l=e.email,c=e.telephone_number,i=e.employment_status,o=e.skills,s=e.experience,u=e.languages,m=e.education;return console.log("aloooooo",this.state),r.a.createElement("section",{className:"oneCandidate"},r.a.createElement("h3",null,a," ",n),r.a.createElement("ul",null,r.a.createElement("img",{src:t,alt:""}),r.a.createElement("p",null,"Email: ",l),c&&r.a.createElement("p",null,"Telephone Number: ",c),r.a.createElement("p",null,"Employment status:",i),r.a.createElement("p",null,"Skills: ",o),s.map(function(e,t){return r.a.createElement("p",{key:t},e[t])}),m.map(function(e,t){return r.a.createElement("p",{key:t},e[t])}),u.map(function(e,t){return r.a.createElement("p",{key:t},e)})))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={specs:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;E.a.get(""+"/api/association/all/".concat(t.id),{withCredentials:!0}).then(function(t){console.log("Association Details",t.data),e.setState(t.data)}).catch(function(e){console.log("Association Details",e),alert("Sorry! Something went wrong. ONEASSO26")})}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.description,n=e.associationLogo,l=e.createdOn,c=e.addInformation,i=e.email,o=e.telNumber;return r.a.createElement("section",{className:"OneAsso"},r.a.createElement("div",null,r.a.createElement("h3",null,t),n&&r.a.createElement("img",{src:n,alt:""}),r.a.createElement("p",null,l),c&&r.a.createElement("p",null,c),r.a.createElement("p",null,i),o&&r.a.createElement("p",null,o),r.a.createElement("p",null,a)))}}]),t}(n.Component);function M(e){return"/association/all/".concat(e._id)}var J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={assoArray:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/api/association/all",{withCredentials:!0}).then(function(t){console.log("Asso List",t.data),e.setState({assoArray:t.data})}).catch(function(e){console.log("Asso List ERROR",e),alert("Sorry! Something went wrong. AllAsso30")})}},{key:"render",value:function(){var e=this.state.assoArray;return r.a.createElement("section",{className:"AssoList"},r.a.createElement("div",null,r.a.createElement("h3",null,"List of all Associations"),r.a.createElement("ul",null,e.map(function(e){return r.a.createElement("div",{key:e._id,className:"AllList"},r.a.createElement("li",null,r.a.createElement("h5",null,r.a.createElement(b.a,{to:M(e)},e.name)),r.a.createElement("p",null,e.createdOn),e.associationLogo&&r.a.createElement("img",{src:e.associationLogo,alt:e.name})))}))))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={jobsArray:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/api/candidate",{withCredentials:!0}).then(function(t){console.log("Jobs",t.data),e.setState({jobsArray:t.data})}).catch(function(e){console.log("Jobs ERROR \ud83d\ude48",e),alert("Sorry! Jobs data not loading")})}},{key:"render",value:function(){var e=this.state.jobsArray;return console.log(e),r.a.createElement("section",{className:"AllJobsSection"},e.map(function(e){return r.a.createElement("div",{key:e._id,className:"AllJobsDiv"},r.a.createElement("ul",{className:"jobDescription"},r.a.createElement("li",null,r.a.createElement("h4",null,e.name)),r.a.createElement("p",null,"Description: ",e.description),r.a.createElement("p",null,"Contract Type: ",e.contractType),r.a.createElement("p",null,"Location: ",e.location),r.a.createElement("p",null,"Created At: ",e.createdAt),r.a.createElement("p",null,"Deadline: ",e.deadline)))}))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={first_name:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"candidates"},r.a.createElement("div",{className:"candidatesJobs"},r.a.createElement("a",{href:"/candidate"},"All Jobs"),r.a.createElement("a",{href:"/recruiter/add-cv"},"Add resume"),r.a.createElement("h1",null,"Welcome"),r.a.createElement(W,null)))}}]),t}(n.Component),q=(a(57),a(59),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={currentUser:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/api/checkuser",{withCredentials:!0}).then(function(t){console.log("Check User",t.data);var a=t.data.userDoc;e.syncCurrentUser(a)}).catch(function(e){console.log("Check User ERROR",e)})}},{key:"syncCurrentUser",value:function(e){this.setState({currentUser:e})}},{key:"logoutClick",value:function(){var e=this;E.a.delete("/api/logout",{withCredentials:!0}).then(function(){e.syncCurrentUser(null)}).catch(function(e){console.log("Logout ERROR",e)})}},{key:"render",value:function(){var e=this,t=this.state.currentUser;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,t?r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(h.a,{path:"/association",component:function(){return r.a.createElement("nav",null,r.a.createElement("a",{className:"linkHome",href:"/association"},"HOME"),r.a.createElement("a",{className:"linkHome",href:"/association/all"},"ALL ASSOCIATIONS"),r.a.createElement("a",{className:"linkHome",href:"/association/change-profile"},"YOUR PROFILE"))}})),r.a.createElement("button",{className:"LogoutButton",onClick:function(){return e.logoutClick()}},"Log Out")):r.a.createElement("nav",null,r.a.createElement(p.a,{className:"linkHome",exact:!0,to:"/"},"INT\xc9GRATION"),r.a.createElement(p.a,{className:"linkHome",to:"/candidate"},"CANDIDATES"),r.a.createElement(p.a,{className:"linkHome",to:"/recruiter"},"RECRUITERS"),r.a.createElement(p.a,{className:"linkHome",to:"/association"},"ASSOCIATIONS"))),r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:f}),r.a.createElement(h.a,{path:"/candidate/add-cv",component:_}),r.a.createElement(h.a,{exact:!0,path:"/candidate",render:function(){return r.a.createElement(F,{onUserChange:function(t){return e.syncCurrentUser(t)}})}}),r.a.createElement(h.a,{path:"/association/signup",render:function(){return r.a.createElement(x,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}})}}),r.a.createElement(h.a,{path:"/association/all/:id",component:T}),r.a.createElement(h.a,{exact:!0,path:"/association/all",component:J}),r.a.createElement(h.a,{path:"/association/change-profile",render:function(){return r.a.createElement(I,{currentUser:e.state.currentUser})}}),r.a.createElement(h.a,{path:"/association",render:function(){return r.a.createElement(j,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}})}}),r.a.createElement(h.a,{path:"/login",render:function(){return r.a.createElement(C,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}})}}),r.a.createElement(h.a,{path:"/recruiter/signup",render:function(){return r.a.createElement(R,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}})}}),r.a.createElement(h.a,{path:"/candidate/signup",render:function(){return r.a.createElement(D,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}})}}),r.a.createElement(h.a,{path:"/recruiter/add-job",component:L}),r.a.createElement(h.a,{path:"/recruiter",render:function(){return r.a.createElement(A,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}})}}),r.a.createElement(h.a,{path:"/candidate/alljobs",component:W}),r.a.createElement(h.a,{path:"/candidate/:nameofthecandidate",component:P}),r.a.createElement(h.a,{path:"/news",component:y}),r.a.createElement(h.a,{component:N})),r.a.createElement("footer",{className:"footer"}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(64);c.a.render(r.a.createElement(H.a,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.f3ae3255.chunk.js.map