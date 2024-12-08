"use client"
import React from 'react'
import styles  from './AboutBottomImage.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'

//parent
const containerVarients ={
  hidden:{},
  show:{
    transition:{
      staggerChildren: 0.2
    }
  }
}
//children
const itemVarients = {
  hidden: {opacity:0, y:20,  },
  show:{
         opacity:1,
         y:0,
  }
}

function AboutBottomImage() {
  return (
    <>
      <motion.section className={styles.aboutbottomimage}
      
      variants={containerVarients}
      initial="hidden"
      whileInView="show"
      >
       <motion.div variants={itemVarients}><Image src={"/portfolio-pics/html.png"} alt='html' width={96} height={96}></Image></motion.div>
        <motion.div variants={itemVarients}><Image src={"/portfolio-pics/css.png"} alt='html' width={96} height={96}></Image></motion.div>
        <motion.div variants={itemVarients}><Image src={"/portfolio-pics/typescript.png"} alt='html' width={70} height={70}></Image></motion.div>
        <motion.div variants={itemVarients}><Image src={"/portfolio-pics/git.png"} alt='html' width={96} height={96}></Image></motion.div>
        <motion.div variants={itemVarients}><Image src={"/portfolio-pics/figma.png"} alt='html' width={96} height={96}></Image></motion.div>
        <motion.div variants={itemVarients}><Image src={"/portfolio-pics/react.png"} alt='html' width={96} height={96}></Image></motion.div>
        <motion.div variants={itemVarients}><Image src={"/portfolio-pics/node.png"} alt='html' width={96} height={96}></Image></motion.div>
        <motion.div variants={itemVarients}><Image src={"/portfolio-pics/next.png"} alt='html' width={96} height={96}></Image></motion.div>
      </motion.section>
    </>
  )
}

export default AboutBottomImage
