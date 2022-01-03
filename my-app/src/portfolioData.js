// const pik =require('3.svg');
// import pik from './components/media/ps5.png';
import front from './components/media/front-end.svg';
import back from './components/media/back-end.svg';
import design from './components/media/web-design.svg';
// import pik from './components/media/';

export const portfolioData = [{
    id: 1,
    // projectName:''
    vidUrl: "https://imgur.com/LArcybK.gif",
    websiteUrl: "https://nobel-hands-ms-neo.vercel.app/",
    githubUrl: "https://github.com/ms-neo/nobel-hands",
    tools:"html - css - javascript"
},
{
    id: 2,
    vidUrl: "https://imgur.com/HGpIiWC.gif",
    websiteUrl: "https://hardcore-visvesvaraya-450ac5.netlify.app/",
    githubUrl: "https://github.com/ms-neo/animating-with-gsap-3",
    tools:"html - css - javascript - webpack - gsap"
}, 
{
    id: 3,
    vidUrl: "https://imgur.com/ZptR5BL.gif",
    websiteUrl: "https://today-weather-app.herokuapp.com/",
    githubUrl: "https://github.com/ms-neo/weather-app/tree/master",
    tools:"html - sass - javascript - rest api - bootstrap - node.js"
},
{
    id: 4,
    vidUrl: "https://imgur.com/6Cn8MWB.gif",
    websiteUrl: "https://animals-in-danger.herokuapp.com/",
    githubUrl: "https://github.com/ms-neo/endangered-animals",
    tools:"react.js - node.js - mongoDB "
}
];





export const skillsData = [{
        id: 1,
        title: 'Front-end development',
        skills: ['html', 'css', 'javascript', 'react', 'sass', 'bootstrap'],
        img: front
    },
    {
        id: 2,
        title: 'Back-end development',
        skills: ['node.js', 'MongoDB', 'REST-Api'],
        img: back
    },
    {
        id: 3,
        title: 'Web design',
        skills: 'occasinally design simple websites',
        img: design
    },
]

// export default {portfolioData}