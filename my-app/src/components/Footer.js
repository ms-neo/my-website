import React,{useEffect} from 'react'
import whiteLogo from './media/nawal-white.svg'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {GrTwitter} from 'react-icons/gr'
import {useInView} from 'react-intersection-observer'
import {motion ,useAnimation} from 'framer-motion'

const socialVariants = {
    'hidden': {
      scale: 0
    },
    'visible': {
      scale: [0, 0, 1, 1.1, 1.1, 1, 1],
      transition: {
        delay: .5,
        duration: .5,
        ease: "easeIn"
      }
    }
  }
  const subVariants ={
    "hidden":{
      opacity:0,
    },
    "visible":{
      opacity:1,
     transition:{
      staggerChildren:.1,
      type:'spring',
      ease:"easeInOut"
     }
    }
}

const logoVariants ={
    "hidden":{
        y:100,
        opacity:0,
      },
      "visible":{
          y:0,
        opacity:1,
       transition:{
        ease:"easeInOut"
       }
      }
}

const Footer = () => {
    const animation = useAnimation();
    const [ref,inView,entry]=useInView({threshold:0});

    useEffect(() => {
        inView ? animation.start('visible') :
            animation.start('hidden');
    }, [animation, inView])

    return (
        <motion.div className="container footer" 
        variants={subVariants} 
        initial='hidden'
        animate={animation}
        ref={ref}>
        <motion.div className="white-logo" variants={logoVariants}>
       <a href="/"><img src={whiteLogo} /></a> 
        </motion.div>
        <motion.div className="social" variants={socialVariants} >
      <motion.a href="" className="icons"  whileHover={{scale:1.8}}>
      <AiFillLinkedin />
      </motion.a>
      <motion.a href="" className="icons" whileHover={{scale:1.8}}>
      <GrTwitter className="icons"/>
      </motion.a>
      <motion.a href="" className="icons" whileHover={{scale:1.8}}>
      <AiFillGithub className="icons"/>
      </motion.a>   
      </motion.div>
          <p>© 2021 Nawal All rights reserved</p>
        </motion.div>
    )
}

export default Footer
