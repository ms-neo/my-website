
import React, { Fragment ,useState} from 'react';
import { MdExpandMore ,MdExpandLess } from "react-icons/md";
import { motion } from "framer-motion";
import { portfolioData } from '../portfolioData';
import Button from './Button'

const iconVariants ={
    opened:{
       scale:1,
        opcity:1,
        transition: {
          type: "spring",
          stiffness: 20,
          restDelta: 2
        }
      },
    closed:{
      scale:1,
        opcity:1,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 40
        }
      }
    }


const Portfolio =({portfolioData})=>{
  const [isOpen, setisOpen] = useState(false);

  const handleClick = (e) =>{
    setisOpen(!isOpen)
    console.log(e.target.value)
  }
  

    return (

      <div className="container"> 
      <h2 className="title">My latest projects :</h2>
      <div className="portfolio">
      {portfolioData.map((p,index)=>
      <div className="card" key={index} >
      <div style={{marginTop :"1rem"}}>
       {p.tools}</div>
     
     <div className="vid">
    {/* <iframe src={p.vidUrl} frameborder="0" allow="autoplay; fullscreen; picture-in-picture ;loop" allowfullscreen  title="nobel-hands screenshot" width="100%" height="100%"></iframe> */}
    <img src={p.vidUrl} height="100%"></img>
    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/pQvbpoDYosc&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ;loop" allowfullscreen></iframe> */}
    </div>
    <div className="btns">
      <motion.a className="btn visit-btn" target="_blank" href={p.websiteUrl}>Visit Website</motion.a>
      <a className="btn github-btn" target="_blank" href={p.githubUrl}>Github</a>
      </div>

     {/* <Button variants={iconVariants}  animate={isOpen?"opened":"closed"} tools={p.tools}/> */}
   
    
  </div>
  
  )}
  </div>
</div> 
   
     
    )
}

export default Portfolio;