import React, { Fragment ,useEffect} from 'react'
import ContantForm from './ContantForm'
import leftSideImg from './media/left-side.png'
import {useInView} from 'react-intersection-observer'
import {motion,useAnimation ,AnimatePresence} from 'framer-motion'


const subVariants ={
    hidden:{
      opacity:0,
    },
    visible:{
      opacity:1,
     transition:{
      staggerChildren:.9,
      delayChildren:1.5,
      type:'spring',
      ease:"easeInOut",
     }
    }
}


const sideLVariants ={
    hidden:{
        y:"50vh",
    },
    "visible":{
      y:0,
        transition:{
            ease:"easeInOut",
            duration:.5,
        }
    }
}

const sideRVariants ={
    hidden:{
        y:"20vh",
    },
    "visible":{
      y:0,
        transition:{
            ease:"easeInOut",
            duration:.5,
        }
    }
}



const ContantMe = () => {

    const animation = useAnimation();
    const [ref,inView,entry]=useInView({threshold:0});

    useEffect(() => {
        inView ? animation.start('visible') :
            animation.start('hidden');
    }, [animation, inView])


    return (
        <div className="container contact-me">
        <AnimatePresence>
        <motion.div  className="subcontainer" variants={subVariants} animate={animation} initial="hidden" ref={ref}>
        <motion.div className='left-side' 
          variants={sideLVariants}
        initial="hidden"
        animate={animation}
        ref={ref}>
        <h1>Hi ;</h1>
        <p>My name is Nawal ,I am a woman who lives in Saudia Arabia , I've always been
        facinated about technology , websites, game devlopment , coding , etc , I finally deceided to learn web development
        and guess what ? I just fell in love with it , I'm truly happy to be a web develper , it makes me happy to see all these
        code turning into colours , shapes , and alive items that wrapped in a beatiful layout , I also love the part where I stuck
        and find solutions , it pleases my mind to solve problems.
        <br></br>
        <br></br>
        So I am here to work with you to help you , and to build your own website with sincerity and enjoyment ,or to be a partner
        in your project . and I also would be happy to get hired in your company to learn more and more , please don't hesitate to contact me.
        <br></br>
        <br></br>
        Thank you for passing by and reading this brief , HAPPY DAY ^^ </p>
        </motion.div>
        <motion.div className='right-side'  variants={sideRVariants} initial="hidden"
        animate={animation}
        ref={ref}>
        <ContantForm />
        </motion.div>
        </motion.div>
        </AnimatePresence>
        <img src={leftSideImg} alt="abstract"/>
        </div>
    )
}

export default ContantMe
