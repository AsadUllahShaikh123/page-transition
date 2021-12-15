import { motion } from 'framer-motion'
import React from 'react'
import Image from '../Images/parrot5.jpg'
import Common from './Common'
import Header from './Header'
import {animateTwo} from '../Animation/AnimatePage'
function About() {
    return (
       <motion.div initial="out" animate="in" exit="out" variants={animateTwo}>
            <Header/>
            <Common Image={Image}/>
       </motion.div>
    )
}

export default About
