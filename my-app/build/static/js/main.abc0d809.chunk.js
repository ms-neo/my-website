(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{52:function(e,t,i){},56:function(e,t,i){},57:function(e,t,i){"use strict";i.r(t);var a=i(2),s=i.n(a),n=i(45),c=i.n(n),r=(i(52),i(12)),l=i.p+"static/media/nawal.40c78649.svg",d=i(60),o=i(3),j={rest:{y:-4,opacity:0},hover:{y:0,opacity:1,transition:{duration:.4,staggerChildren:.5}}},b={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,type:"spring",ease:"easeInOut",delayChildren:1.5}}},h={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{staggerChildren:.1,type:"spring",ease:"easeInOut",delayChildren:.2}}},m=["Skill","Portfolio","Hire me"],p=function(e){var t=e.menuState,i=e.setMenuState;return Object(o.jsx)(a.Fragment,{children:Object(o.jsxs)("nav",{children:[Object(o.jsx)("img",{className:"logo",src:l}),Object(o.jsx)(d.a.ul,{className:"nav-links ".concat(t?"close-menu":""),variants:b,animate:"visible",initial:"hidden",children:m.map((function(e,t){return Object(o.jsx)(d.a.li,{variants:h,children:Object(o.jsxs)(d.a.a,{href:"#",whileHover:"hover",animate:"rest",initial:"rest",children:[Object(o.jsx)(d.a.span,{className:"line",variants:j}),e]})},t)}))}),Object(o.jsx)("div",{className:"toggle-button",onClick:function(){return i(!t)},children:t?Object(o.jsx)("h1",{children:"X"}):Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)("div",{className:"bar"}),Object(o.jsx)("div",{className:"bar"}),Object(o.jsx)("div",{className:"bar"})]})})]})})},v=i(29),u=i(37),O={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.6,type:"spring",ease:"easeInOut",delay:.5}},exit:{y:"100vh"}},g={hidden:{scale:0},visible:{scale:[0,0,1,1.1,1.1,1,1],transition:{delay:2,duration:.6,ease:"easeIn"}}},x={hidden:{width:0},visible:{width:"100%",transition:{delay:1,duration:.2}}},y=function(){return Object(o.jsxs)("div",{className:"intro-section",children:[Object(o.jsx)("div",{className:"heading",children:Object(o.jsxs)(d.a.h1,{className:"h1",initial:{y:"100%"},animate:{y:0},children:["Here is Nawal ,A passionate ",Object(o.jsxs)(d.a.div,{variants:O,className:"front",animate:"visible",initial:"hidden",children:[Object(o.jsx)(d.a.div,{className:"green-line",variants:x,animate:"visible",initial:"hidden"}),"front-end develper"]})," and a web designer ."]})}),Object(o.jsxs)(d.a.div,{className:"social",variants:g,animate:"visible",initial:"hidden",children:[Object(o.jsx)(d.a.a,{href:"",className:"icons",whileHover:{scale:1.8},children:Object(o.jsx)(v.b,{})}),Object(o.jsx)(d.a.a,{href:"",className:"icons",whileHover:{scale:1.8},children:Object(o.jsx)(u.a,{className:"icons"})}),Object(o.jsx)(d.a.a,{href:"",className:"icons",whileHover:{scale:1.8},children:Object(o.jsx)(v.a,{className:"icons"})})]})]})},f=i(27),w=i(59),N=i(61),k={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,type:"spring",ease:"easeInOut"}},exit:{opacity:0,height:"50vh"}},I={hidden:{y:400,opacity:0},visible:{y:0,opacity:1,transition:{duration:.7}},exit:{opacity:0,y:-400}},C={hidden:{scale:0},visible:{scale:1,transition:{duration:.7,type:"spring",stiffness:250}}},S={hidden:{y:500},visible:{y:0,transition:{duration:.7}}},U=function(e){var t=e.skillsData,i=Object(a.useState)(),s=Object(r.a)(i,2),n=(s[0],s[1],Object(w.a)()),c=Object(f.a)({threshold:.1}),l=Object(r.a)(c,3),j=l[0],b=l[1];l[2];return Object(a.useEffect)((function(){b?n.start("visible"):n.start("hidden")}),[n,b]),Object(o.jsx)(a.Fragment,{children:Object(o.jsx)("div",{className:"container skill",children:Object(o.jsx)(N.a,{children:Object(o.jsx)(d.a.div,{className:"sub-container",variants:k,initial:"hidden",animate:n,exit:"hidden",ref:j,children:t.map((function(e,t){return e&&Object(o.jsxs)(d.a.div,{className:"card",variants:I,exit:"exit",animate:n,ref:j,children:[Object(o.jsx)(d.a.img,{src:e.img,alt:"screen-icon",variants:C}),Object(o.jsxs)("div",{children:[Object(o.jsx)(d.a.div,{className:"line",variants:S}),Object(o.jsx)(d.a.h3,{variants:S,children:e.title}),Array.isArray(e.skills)?Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)(d.a.ul,{variants:S,children:e.skills.map((function(e,t){return Object(o.jsx)("li",{children:e},t)}))})," "]}):Object(o.jsx)(d.a.p,{variants:S,children:e.skills})]})]},t)}))})})})})},F=i.p+"static/media/front-end.fbf96e2f.svg",H=i.p+"static/media/back-end.c7f77661.svg",A=i.p+"static/media/web-design.7b9ae2a4.svg",D=[{id:1,vidUrl:"https://imgur.com/LArcybK.gif",websiteUrl:"https://nobel-hands-ms-neo.vercel.app/",githubUrl:"https://github.com/ms-neo/nobel-hands",tools:"html - css - javascript"},{id:2,vidUrl:"https://imgur.com/HGpIiWC.gif",websiteUrl:"https://hardcore-visvesvaraya-450ac5.netlify.app/",githubUrl:"https://github.com/ms-neo/animating-with-gsap-3",tools:"html - css - javascript - webpack - gsap"},{id:3,vidUrl:"https://imgur.com/ZptR5BL.gif",websiteUrl:"https://today-weather-app.herokuapp.com/",githubUrl:"https://github.com/ms-neo/weather-app/tree/master",tools:"html - sass - javascript - rest api - bootstrap - node.js"},{id:4,vidUrl:"https://imgur.com/6Cn8MWB.gif",websiteUrl:"https://animals-in-danger.herokuapp.com/",githubUrl:"https://github.com/ms-neo/endangered-animals",tools:"react.js - node.js - mongoDB "}],E=[{id:1,title:"Front-end development",skills:["html","css","javascript","react","sass","bootstrap"],img:F},{id:2,title:"Back-end development",skills:["node.js","MongoDB","REST-Api"],img:H},{id:3,title:"Web design",skills:"occasinally design simple websites",img:A}],M=(i(38),function(e){var t=e.portfolioData,i=Object(a.useState)(!1),s=Object(r.a)(i,2);s[0],s[1];return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{className:"title",children:"My latest projects :"}),Object(o.jsx)("div",{className:"portfolio",children:t.map((function(e,t){return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{style:{marginTop:"1rem"},children:e.tools}),Object(o.jsx)("div",{className:"vid",children:Object(o.jsx)("img",{src:e.vidUrl,height:"100%"})}),Object(o.jsxs)("div",{className:"btns",children:[Object(o.jsx)(d.a.a,{className:"btn visit-btn",target:"_blank",href:e.websiteUrl,children:"Visit Website"}),Object(o.jsx)("a",{className:"btn github-btn",target:"_blank",href:e.githubUrl,children:"Github"})]})]},t)}))})]})}),B=i(47),P=i.n(B),L=function(){return Object(o.jsxs)("form",{id:"form",onSubmit:function(e){e.preventDefault(),P.a.sendForm("webdeveloper.neo","template_qo3m9mm","#form","user_PvnWRnrARwfm4iV0O0Mw4").then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)})),e.target.reset()},children:[Object(o.jsx)("label",{children:"Name"}),Object(o.jsx)("input",{type:"text",id:"fname",placeholder:"name...",name:"name"}),Object(o.jsx)("label",{children:"Subject"}),Object(o.jsx)("input",{type:"text",id:"fname",placeholder:"subject...",name:"subject"}),Object(o.jsx)("label",{children:"Email"}),Object(o.jsx)("input",{type:"email",id:"lname",placeholder:"email...",name:"email"}),Object(o.jsx)("label",{children:"message"}),Object(o.jsx)("textarea",{placeholder:"message . . .",name:"message"}),Object(o.jsx)("button",{children:"send"})]})},T=i.p+"static/media/left-side.7e3106a9.png",W={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.9,delayChildren:1.5,type:"spring",ease:"easeInOut"}}},R={hidden:{y:"50vh"},visible:{y:0,transition:{ease:"easeInOut",duration:.5}}},_={hidden:{y:"20vh"},visible:{y:0,transition:{ease:"easeInOut",duration:.5}}},G=function(){var e=Object(w.a)(),t=Object(f.a)({threshold:0}),i=Object(r.a)(t,3),s=i[0],n=i[1];i[2];return Object(a.useEffect)((function(){n?e.start("visible"):e.start("hidden")}),[e,n]),Object(o.jsxs)("div",{className:"container contact-me",children:[Object(o.jsx)(N.a,{children:Object(o.jsxs)(d.a.div,{className:"subcontainer",variants:W,animate:e,initial:"hidden",ref:s,children:[Object(o.jsxs)(d.a.div,{className:"left-side",variants:R,initial:"hidden",animate:e,ref:s,children:[Object(o.jsx)("h1",{children:"Hi ;"}),Object(o.jsxs)("p",{children:["My name is Nawal ,I am a woman who lives in Saudia Arabia , I've always been facinated about technology , websites, game devlopment , coding , etc , I finally deceided to learn web development and guess what ? I just fell in love with it , I'm truly happy to be a web develper , it makes me happy to see all these code turning into colours , shapes , and alive items that wrapped in a beatiful layout , I also love the part where I stuck and find solutions , it pleases my mind to solve problems.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"So I am here to work with you to help you , and to build your own website with sincerity and enjoyment ,or to be a partner in your project . and I also would be happy to get hired in your company to learn more and more , please don't hesitate to contact me.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Thank you for passing by and reading this brief , HAPPY DAY ^^ "]})]}),Object(o.jsx)(d.a.div,{className:"right-side",variants:_,initial:"hidden",animate:e,ref:s,children:Object(o.jsx)(L,{})})]})}),Object(o.jsx)("img",{src:T,alt:"abstract"})]})},J=i.p+"static/media/nawal-white.a8fef573.svg",V={hidden:{scale:0},visible:{scale:[0,0,1,1.1,1.1,1,1],transition:{delay:.5,duration:.5,ease:"easeIn"}}},Y={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,type:"spring",ease:"easeInOut"}}},q={hidden:{y:100,opacity:0},visible:{y:0,opacity:1,transition:{ease:"easeInOut"}}},K=function(){var e=Object(w.a)(),t=Object(f.a)({threshold:0}),i=Object(r.a)(t,3),s=i[0],n=i[1];i[2];return Object(a.useEffect)((function(){n?e.start("visible"):e.start("hidden")}),[e,n]),Object(o.jsxs)(d.a.div,{className:"container footer",variants:Y,initial:"hidden",animate:e,ref:s,children:[Object(o.jsx)(d.a.div,{className:"white-logo",variants:q,children:Object(o.jsx)("a",{href:"/",children:Object(o.jsx)("img",{src:J})})}),Object(o.jsxs)(d.a.div,{className:"social",variants:V,children:[Object(o.jsx)(d.a.a,{href:"",className:"icons",whileHover:{scale:1.8},children:Object(o.jsx)(v.b,{})}),Object(o.jsx)(d.a.a,{href:"",className:"icons",whileHover:{scale:1.8},children:Object(o.jsx)(u.a,{className:"icons"})}),Object(o.jsx)(d.a.a,{href:"",className:"icons",whileHover:{scale:1.8},children:Object(o.jsx)(v.a,{className:"icons"})})]}),Object(o.jsx)("p",{children:"\xa9 2021 Nawal All rights reserved"})]})},X=(i(56),function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),i=t[0],s=t[1];return Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)(p,{menuState:i,setMenuState:s}),Object(o.jsx)(y,{}),Object(o.jsx)(U,{skillsData:E}),Object(o.jsx)(M,{portfolioData:D}),Object(o.jsx)(G,{}),Object(o.jsx)(K,{})]})}),Z=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,62)).then((function(t){var i=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;i(e),a(e),s(e),n(e),c(e)}))};c.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(X,{})}),document.getElementById("root")),Z()}},[[57,1,2]]]);
//# sourceMappingURL=main.abc0d809.chunk.js.map