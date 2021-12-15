import { motion } from 'framer-motion'
import React from 'react'
import Image from '../Images/parrot3.jpg'
import Common from './Common'
import {animateOne,transition} from '../Animation/AnimatePage'
import Header from './Header'
function Home() {
    return (
        <motion.div initial="out" animate="in" variants={animateOne} transition={transition}>
            <Header/>
            <Common Image={Image} title={'What a bird this is'} description={'Nice Choice'}/>
        </motion.div>
    )
}

export default Home
