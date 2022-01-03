
import React from 'react';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {GrTwitter} from 'react-icons/gr'
import {motion} from 'framer-motion'

//set framer motion
const headingVariants ={
  hidden:{
    opacity:0,
  },
  visible:{
    opacity:1,
   transition:{
    staggerChildren:.6,
    type:'spring',
    ease:"easeInOut",
    delay:.5
   }
  },
  'exit':{
    y:'100vh'
  }
}

const socialVariants = {
  'hidden': {
    scale: 0
  },
  'visible': {
    scale: [0, 0, 1, 1.1, 1.1, 1, 1],
    transition: {
      delay: 2,
      duration: .6,
      ease: "easeIn"
    }
  }
}

const linVariants= {
  'hidden':{
    width:0},
  'visible':{width:'100%',
  transition:{delay:1,duration:.2}} 
}

const Intro =()=>{

    return <div className="intro-section">
    <div className="heading">
      <motion.h1 className="h1" initial={{y:"100%",}} animate={{y:0,}} >Here is Nawal ,A passionate <motion.div variants={headingVariants} className='front' animate='visible' initial="hidden"  >
      <motion.div className="green-line" variants={linVariants} animate='visible' initial='hidden'></motion.div>
      front-end develper</motion.div> and 
      a web designer .</motion.h1>
      </div>
      <motion.div className="social"  variants={socialVariants} animate='visible' initial="hidden">
      <motion.a href="" className="icons" whileHover={{scale:1.8}} >
      <AiFillLinkedin />
      </motion.a>
      <motion.a href="" className="icons" whileHover={{scale:1.8}}>
      <GrTwitter className="icons"/>
      </motion.a>
      <motion.a href="" className="icons" whileHover={{scale:1.8}}>
      <AiFillGithub className="icons"/>
      </motion.a>   
      </motion.div>
    </div>
}

export default Intro