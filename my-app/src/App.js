import React ,{Fragment ,useState} from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import ContantMe from './components/ContantMe';
import Footer from './components/Footer';
import {portfolioData} from './portfolioData';
import {skillsData} from './portfolioData';
import './index.scss';
import { Route, Switch } from 'react-router-dom';



const App = () => {
  const [menuState,setMenuState] = useState(false)
  return (
<Fragment>
<Navbar menuState={menuState} setMenuState={setMenuState}/>
<Intro/>
<Skills skillsData={skillsData}/>
<Portfolio portfolioData={portfolioData} /> 
<ContantMe />
<Footer/>
{/* <Switch>
<Route exact path="/skills" component={Skills} />
</Switch> */}
    </Fragment>
  );
}

export default App;
