import React, {Fragment} from 'react';
import logo from './media/nawal.svg';
import {motion } from 'framer-motion'
import { HashLink } from 'react-router-hash-link'
import {Link} from 'react-router-dom'


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

// const navText =['Skill', 'Portfolio' , 'Hire me']

const Navbar = ({menuState, setMenuState}) => {
  
    return (
        <Fragment>
            <nav>
                <img className="logo" src={logo}/>
                <motion.ul className={`nav-links ${menuState? "close-menu"  : ""}`} variants={ulVariants} animate="visible" initial="hidden" >
                    <motion.li  variants={liVariants}>
                        <motion.div  whileHover="hover" animate="rest" initial="rest" >
                        <motion.a onClick={()=>window.location.replace("/#skill")} whileHover="hover" animate="rest" initial="rest">
                        <motion.span className="line" variants={childrenVariants}></motion.span>Skills</motion.a></motion.div>
                    </motion.li>
                    <motion.li  variants={liVariants}>
                        <motion.div  whileHover="hover" animate="rest" initial="rest" >
                        <motion.a onClick={()=>window.location.replace("/#portfolio")} whileHover="hover" animate="rest" initial="rest">
                        <motion.span className="line" variants={childrenVariants}></motion.span>Portfolio</motion.a></motion.div>
                    </motion.li>
                    <motion.li  variants={liVariants}>
                        <motion.div  whileHover="hover" animate="rest" initial="rest" >
                        <motion.a onClick={()=>window.location.replace("/#contact")} whileHover="hover" animate="rest" initial="rest">
                        <motion.span className="line" variants={childrenVariants}></motion.span>Hire Me</motion.a></motion.div>
                    </motion.li>
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