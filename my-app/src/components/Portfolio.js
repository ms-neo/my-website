
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

      <div className="container" id="portfolio"> 
      <h2 className="title">My latest projects :</h2>
      <div className="portfolio">
      {portfolioData.map((p,index)=>
      <div className="card" key={index} >

      <div style={{marginTop :"1rem"}}>
      <h3>{p.title}</h3>
       <p>{p.tools} </p>
       </div>
     
     <div className="vid">
    <img src={p.vidUrl} id="gif"></img>
 
    </div>
    <div className="btns">
      <motion.a className="btn visit-btn" target="_blank" href={p.websiteUrl}>Visit Website</motion.a>
      <a className="btn github-btn" target="_blank" href={p.githubUrl}>Source Code</a>
      </div>

     {/* <Button variants={iconVariants}  animate={isOpen?"opened":"closed"} tools={p.tools}/> */}
   
    
  </div>
  
  )}
  </div>
</div> 
   
     
    )
}

export default Portfolio;