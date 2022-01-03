import React,{useState, Fragment} from 'react'
import { MdExpandMore ,MdExpandLess } from "react-icons/md";
import { motion } from "framer-motion";


const dropdownVariants ={
    opened: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 130px 30px)`,
        transition: {
          type: "spring",
          stiffness: 20,
          restDelta: 2
        }
      }),
      closed: {
        clipPath: "circle(0px at 6vh 30px)",
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 40
        }
      }
}

const Button = ({tools}) => {
    const [isOpen, setisOpen] = useState(false)

    const handleClick =()=> setisOpen(!isOpen)
    return (
        <Fragment>
        <motion.div class="icon-hover" onClick={handleClick} >
        {isOpen? ( <MdExpandLess className="expand-icon" />):
        <MdExpandMore className="expand-icon" />
        }
        </motion.div>
        <motion.div className="card-back" variants={dropdownVariants} animate={isOpen?"opened":"closed"}>
        <h3>Built by</h3>
        <p>{tools}</p>
        </motion.div>
        </Fragment>
    )
}

export default Button

