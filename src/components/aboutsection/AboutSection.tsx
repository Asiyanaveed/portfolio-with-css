"use client"
import React from 'react'
import styles from './AboutSection.module.css'
import { caveatFont, interFont } from '@/font'
import Button from '../button/Button'
import Image from 'next/image'
import {motion} from 'framer-motion'

function AboutSection() {
  return (
    <div>
      <section id="about" className={styles.aboutsec}>
        <motion.div className={styles.aboutleftDiv}
        initial={{opacity:0, x: -100}}
        whileInView={{opacity:1 ,x:0,}}
        transition={{duration:2, type:"spring"}}>
            <h1 className={caveatFont.className}>Asiya Naveed</h1>
            <p className={caveatFont.className}>Freelance  Web development</p>
            <h2 className={`${styles.h2text}  ${interFont.className}`}> Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Unde possimus aliquam aspernatur laborum maxime 
                expedita consequatur nobis, id itaque quisquam.Unde possimus
                aliquam aspernatur laborum maximexpedita consequatur
                 nobis, id itaque quisquam
            </h2>
            <Button text={'Contact Me'}/>
        </motion.div>

        <motion.div className={styles.aboutRightDiv}
        initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:50}}
        transition={{duration:2, type:"spring"}}>
            <Image className={styles.Image} src={"/portfolio-pics/Asiya.jpg"} alt={"my pic"} width={400} height={400} className={styles.img}></Image>
        </motion.div>
      </section>
    </div>
  )
}

export default AboutSection
