import { motion } from 'framer-motion'
import React from 'react'
import { animateThree } from '../Animation/AnimatePage'
import Image from '../Images/parrot6.jpg'
import Common from './Common'
import Header from './Header'
function Contact() {
    return (
        <motion.div initial="out" animate="end" exit="out" variants={animateThree}>
            <Header/>
            <Common Image={Image} />
        </motion.div>
    )
}

export default Contact