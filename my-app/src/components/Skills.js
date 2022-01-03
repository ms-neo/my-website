
import React, { Fragment ,useRef ,useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer'
import {motion, useAnimation ,AnimatePresence} from 'framer-motion'


const subVariants ={
    hidden:{
      opacity:0,
    },
    visible:{
      opacity:1,
     transition:{
      staggerChildren:.1,
      type:'spring',
      ease:"easeInOut"
     }
    },
    exit:{
      opacity:0,
      height:"50vh"
    }
}

const cardVariants ={
    hidden:{
      y:400,
      opacity:0
    },
    visible:{
        y:0,
      opacity:1,
     transition:{
        duration:.7 ,
     }
    },
    exit:{
      opacity:0,
    y:-400
    }
}

const iconsVariants ={
    hidden:{
        scale:0,
      },
      visible:{
          scale:1,
       transition:{
          duration:.7 ,
          type: 'spring',
          stiffness:250,
       
       }
      }
}

const childrenVariants ={
    hidden:{
        y:500,
      },
      visible:{
          y:0,
       transition:{
          duration:.7 , 
       }
      }
}

const Skills =({skillsData})=>{
  const [variant , setVariant] =useState()

    const animation = useAnimation();
    const [ref,inView,entry]=useInView({threshold:.1});

    useEffect(()=>{
 inView? animation.start('visible')
:animation.start('hidden');
    },[animation,inView])

    return (
     <Fragment>
  <div className="container skill"  >
  {/* <h2 className="skill-title">I am good at :</h2> */}
  <AnimatePresence>
  <motion.div 
   className="sub-container"
   variants={subVariants} 
   initial='hidden'
   animate={animation}
   exit="hidden"
   ref={ref} >
    {skillsData.map((item,index) => item &&
    <motion.div 
     className="card"
     key={index}
     variants={cardVariants}
     exit="exit"
     animate={animation}
     ref={ref} >
    <motion.img 
    src={item.img} 
    alt="screen-icon"
    variants={iconsVariants}/>
    <div>
    <motion.div className="line" variants={childrenVariants}></motion.div>
    <motion.h3 variants={childrenVariants}>{item.title}</motion.h3>
    {  Array.isArray(item.skills) ? <Fragment>
    <motion.ul variants={childrenVariants}>
    {item.skills.map((skillItem,index) => 
    <li key={index}>{skillItem}</li> )} 
    </motion.ul> </Fragment>  : <motion.p variants={childrenVariants}>{item.skills}</motion.p> }
    </div>
    </motion.div>
    )}
    </motion.div>
    </AnimatePresence>
    </div>
    </Fragment>
    )
}

export default Skills