import React, {Fragment} from 'react';
import logo from './media/nawal.svg';
import {motion } from 'framer-motion'


const childrenVariants ={
    "rest":{
        y:-4,
        opacity:0
    },
    "hover":{
        y:0,
        opacity:1,
        transition:{
       duration:.4,
       staggerChildren:.5
        }
    }
}

const ulVariants ={
    "hidden":{
        opacity:0,
    },
    "visible":{
        opacity:1,
        transition:{
           
            staggerChildren:.1,
            type:'spring',
            ease:"easeInOut",
            delayChildren:1.5
             }
    }
}

const liVariants ={
    "hidden":{
        opacity:0,
        y:30,  
    },
    "visible":{
        opacity:1,
        y:0,
        transition:{
            staggerChildren:.1,
            type:'spring',
            ease:"easeInOut",
            delayChildren:.2,
      
             }
    }
}

const navText =['Skill', 'Portfolio' , 'Hire me']

const Navbar = ({menuState, setMenuState}) => {
  
    return (
        <Fragment>
            <nav>
                <img className="logo" src={logo}/>
                <motion.ul className={`nav-links ${menuState? "close-menu"  : ""}`} variants={ulVariants} animate="visible" initial="hidden" >
                {navText.map((text,index) =>
                    <motion.li key={index} variants={liVariants}>
                        <motion.a href="#" whileHover="hover" animate="rest" initial="rest"  >
                        <motion.span className="line" variants={childrenVariants} ></motion.span>{text}</motion.a>
                    </motion.li>
                )}
                </motion.ul>
        <div className="toggle-button" onClick={()=>setMenuState(!menuState)}>
            {!menuState ? (<Fragment><div className="bar"></div>
             <div className="bar"></div>
             <div className="bar"></div></Fragment> ):(<h1>X</h1>)}
         </div>
            </nav>
        </Fragment>
    );
}

export default Navbar